import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="mb-6 mt-8 border-b border-gray-800 pb-2 text-4xl font-bold text-white/90"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="mb-4 mt-8 text-3xl font-semibold text-white/90" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="mb-4 mt-6 text-2xl font-semibold text-white/85" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className="mb-3 mt-6 text-xl font-semibold text-white/85" {...props}>
        {children}
      </h4>
    ),

    p: ({ children, ...props }) => (
      <p className="my-4 text-base leading-relaxed text-gray-300" {...props}>
        {children}
      </p>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-white/90" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic text-gray-300" {...props}>
        {children}
      </em>
    ),

    ul: ({ children, ...props }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-gray-300" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-gray-300" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-gray-300" {...props}>
        {children}
      </li>
    ),

    a: ({ children, href, ...props }) => (
      <Link
        href={href ?? '#'}
        className="text-blue-400 underline decoration-2 underline-offset-2 transition-colors hover:text-blue-300"
        {...props}
      >
        {children}
      </Link>
    ),

    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-6 border-l-4 border-blue-500/50 bg-gray-800/50 py-3 pl-4 italic text-gray-300"
        {...props}
      >
        {children}
      </blockquote>
    ),

    pre: ({ children, ...props }) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg bg-gray-800/50 p-4 text-sm text-gray-300"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ children, ...props }) => (
      <code
        className="rounded bg-gray-800 px-1.5 py-0.5 font-mono text-sm text-gray-300"
        {...props}
      >
        {children}
      </code>
    ),

    table: ({ children, ...props }) => (
      <div className="my-6 w-full overflow-x-auto">
        <table
          className="w-full border-collapse text-left text-gray-300"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border-b border-gray-800 bg-gray-900/50 px-4 py-2 font-semibold text-white/90"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border-b border-gray-800 px-4 py-2" {...props}>
        {children}
      </td>
    ),

    hr: (props) => <hr className="my-8 border-gray-800" {...props} />,

    img: ({ alt, src, width, height, ...props }) => (
      <Image
        src={src || ''}
        alt={alt || ''}
        width={Number(width)}
        height={Number(height)}
        className="my-6 w-full rounded-lg"
        {...props}
      />
    ),
    Alert,
    AlertTitle,
    AlertDescription,
    Button,
    Card,
    ...components,
  };
}
