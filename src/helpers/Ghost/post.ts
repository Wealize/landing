import { PostOrPage, Tag } from '@tryghost/content-api'
import getUrls from 'get-urls'

import { CLIENT_STORY_TAG_SLUG, EXTERNAL_CONTENT_TAG_SLUG } from '../../constants/Ghost/sectionsTags'

export const getSluggedTagsFromPost = (post: PostOrPage):string[] => {
  if (!post || !post?.tags) return []
  return post?.tags.map((tag: Tag) => tag.slug)
}

export const isClientStory = (post: PostOrPage):boolean => {
  return getSluggedTagsFromPost(post).includes(CLIENT_STORY_TAG_SLUG)
}

export const isExternalContent = (post: PostOrPage):boolean => {
  return getSluggedTagsFromPost(post).includes(EXTERNAL_CONTENT_TAG_SLUG)
}

export const getFirstHref = (post: PostOrPage): string | null => {
  if (!isExternalContent(post)) return null

  const foundUrls = getUrls(post?.html)
  if (!foundUrls?.size) return null

  return foundUrls.values().next().value
}
