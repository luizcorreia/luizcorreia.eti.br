import type { MarkdownInstance } from 'astro'

type Frontmatter = {
  date: string
  description?: string
  image?: string
  introduction?: string
  'main-class'?: string
  main_class?: string
  title: string
}

type PostModule = MarkdownInstance<Frontmatter>

const modules = import.meta.glob<PostModule>('../../posts/*.md', { eager: true })

export type Post = {
  slug: string
  frontmatter: Frontmatter
  Content: PostModule['Content']
  minutes: number
}

function slugFromPath(path: string) {
  return path
    .split('/')
    .at(-1)!
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/\.md$/, '')
}

export function getPosts(): Post[] {
  return Object.entries(modules)
    .map(([path, post]) => ({
      slug: slugFromPath(path),
      frontmatter: {
        ...post.frontmatter,
        main_class: post.frontmatter.main_class || post.frontmatter['main-class']
      },
      Content: post.Content,
      minutes: Math.max(1, Math.ceil(post.rawContent().trim().split(/\s+/).length / 220))
    }))
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date))
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${date}T12:00:00`))
}
