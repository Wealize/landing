import { PostOrPage, Tag } from '@tryghost/content-api'

export const getSluggedTagsFromPost = (post: PostOrPage):string[] => {
  if (!post || !post?.tags) return []
  return post?.tags.map((tag: Tag) => tag.slug)
}
