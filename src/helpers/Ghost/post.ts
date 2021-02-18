import { PostOrPage, Tag } from '@tryghost/content-api'
import extractUrls from 'extract-urls'

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

  const foundUrls = extractUrls(post?.html)
  return foundUrls[0] || null
}

export const dateFormatLongNumeric = (date: string, lang = 'en'): string => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return new Intl.DateTimeFormat(lang, options)
      .format(new Date(date))
  } catch (error) {
    console.error(error)
  }
}
