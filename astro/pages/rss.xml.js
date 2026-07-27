import rss from '@astrojs/rss'
import { getPosts } from '../lib/posts'

export function GET(context) {
  return rss({
    title: 'Luiz Correia Blog',
    description: 'Blog sobre tecnologia, segurança e privacidade digital',
    site: context.site,
    items: getPosts().map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description || '',
      pubDate: new Date(`${post.frontmatter.date}T12:00:00`),
      link: `/${post.slug}/`
    }))
  })
}
