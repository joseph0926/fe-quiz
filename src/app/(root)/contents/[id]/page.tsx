import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Suspense } from "react";
import { MdxRemoteWrapper } from "@/components/contents/mdx-remote-wrapper";

export async function generateStaticParams() {
  const postsDirectory = path.join(
    process.cwd(),
    "src",
    "constants",
    "typescript"
  );
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    id: filename.replace(/\.mdx?$/, ""),
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const filePath = path.join(
    process.cwd(),
    "src",
    "constants",
    "typescript",
    `${id}.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <div className="prose mx-auto p-4">
      <Link href="/contents" className="block py-4">
        뒤로가기
      </Link>
      <h1>{data.title}</h1>
      <Suspense fallback={null}>
        <MdxRemoteWrapper content={content} />
      </Suspense>
    </div>
  );
}
