import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const lessenDirectory = join(process.cwd(), "lessen");

export function getLessenSlugs(subdir: string) {
  return fs.readdirSync(join(lessenDirectory, subdir ));
}

export function getLesBySlug(subdir: string, slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(lessenDirectory, subdir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content: content,
    data: data,
  };
}

export function getAllLessen(subdir: string) {
  const slugs = getLessenSlugs(subdir);
  return slugs.map((slug) => getLesBySlug(subdir, slug));
}
