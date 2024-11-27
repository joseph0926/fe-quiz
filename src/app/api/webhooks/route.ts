import {
  DeletedObjectJSON,
  UserJSON,
  WebhookEvent,
} from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { Webhook } from 'svix';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      'Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;
  console.log('!@#!@#!@3');

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error: Could not verify webhook:', err);
    return new Response('Error: Verification error', {
      status: 400,
    });
  }
  console.log('!@!#!@#!@#@!', evt);

  try {
    if (evt.type === 'user.created') {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data as UserJSON;
      const primaryEmail = email_addresses[0]?.email_address;

      if (!primaryEmail) {
        return new Response('Error: No email address found', {
          status: 400,
        });
      }

      await prisma.user.create({
        data: {
          id,
          externalId: id,
          email: primaryEmail,
          name: `${first_name || ''} ${last_name || ''}`.trim(),
          imageUrl: image_url,
        },
      });

      console.log(`Created new user with ID: ${id}`);
    }

    if (evt.type === 'user.updated') {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data as UserJSON;
      const primaryEmail = email_addresses[0]?.email_address;

      if (!primaryEmail) {
        return new Response('Error: No email address found', {
          status: 400,
        });
      }

      await prisma.user.update({
        where: { externalId: id },
        data: {
          email: primaryEmail,
          name: `${first_name || ''} ${last_name || ''}`.trim(),
          imageUrl: image_url,
        },
      });

      console.log(`Updated user with ID: ${id}`);
    }

    if (evt.type === 'user.deleted') {
      const { id } = evt.data as DeletedObjectJSON;

      await prisma.user.delete({
        where: { externalId: id },
      });

      console.log(`Deleted user with ID: ${id}`);
    }

    return new Response('Webhook processed successfully', {
      status: 200,
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Error processing webhook', {
      status: 500,
    });
  }
}
