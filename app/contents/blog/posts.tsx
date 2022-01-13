import { FunctionComponent } from 'react'

import { Container, H, P } from '~/components'
import type { BlogPost } from '~/types'

interface BlogPostProps {
  posts: BlogPost[]
}

export const BlogPosts: FunctionComponent<BlogPostProps> = ({ posts }) => (
  <Container>
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <H as="h4">{post.title}</H>
          <P>{post.content}</P>
        </div>
      ))}
    </div>
  </Container>
)
