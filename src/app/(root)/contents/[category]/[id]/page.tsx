import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Suspense } from "react";
import { MdxRemoteWrapper } from "@/components/contents/mdx-remote-wrapper";

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { id, category } = await params;

  const filePath = path.join(
    process.cwd(),
    "src",
    "constants",
    category,
    `${id}.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <div className="prose mx-auto p-4">
      <div className="flex items-center w-full justify-between py-4">
        <Link href={`/contents/${category}`} className="block">
          뒤로가기
        </Link>
        <Link href={`/contents/${category}/${id}/quiz`} className="block">
          코드 퀴즈
        </Link>
      </div>
      <h1>{data.title}</h1>
      <Suspense fallback={null}>
        <MdxRemoteWrapper content={content} />
      </Suspense>
    </div>
  );
}
