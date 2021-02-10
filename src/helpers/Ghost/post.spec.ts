import { PostOrPage } from '@tryghost/content-api'

import {
  CLIENT_STORY_TYPE_POST,
  EXTERNAL_CONTENT_POST,
  NEWS_TYPE_POST,
  POST_WITHOUT_TAGS
} from '../../__fixtures__/Ghost/posts'

import {
  getSluggedTagsFromPost,
  isClientStory,
  isExternalContent,
  getFirstHref
} from './post'

describe('getSluggedTagsFromPostsSlug()', () => {
  it('should return correct slugged tags from post', () => {
    const result:string[] = getSluggedTagsFromPost(CLIENT_STORY_TYPE_POST)
    expect(result).toEqual(['client-story'])

    const resultNullPost:string[] = getSluggedTagsFromPost(null)
    expect(resultNullPost).toEqual([])
  })
})

describe('isClientStory()', () => {
  it('should return true value', () => {
    const result:boolean = isClientStory(CLIENT_STORY_TYPE_POST)
    expect(result).toEqual(true)
  })

  it('should return false value', () => {
    const result:boolean = isClientStory(NEWS_TYPE_POST)
    expect(result).toEqual(false)
  })
})

describe('isExternalContent()', () => {
  it('should return true value', () => {
    const result:boolean = isExternalContent(EXTERNAL_CONTENT_POST)
    expect(result).toEqual(true)
  })

  it('should return false value', () => {
    const result:boolean = isExternalContent(POST_WITHOUT_TAGS)
    expect(result).toEqual(false)
  })
})

describe('getFirstHref()', () => {
  it('should return first link from html', () => {
    const result:string = getFirstHref(EXTERNAL_CONTENT_POST)
    expect(result).toEqual('https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/match')
  })

  it('should not return first link from html', () => {
    const post: PostOrPage = {
      ...EXTERNAL_CONTENT_POST,
      tags: [
        {
          id: '602112e0638f28001c9994e3',
          name: 'news',
          slug: 'news',
          description: null,
          feature_image: null,
          visibility: 'public',
          meta_title: null,
          meta_description: null,
          url: 'https://wlz-blog.herokuapp.com/tag/news/'
        }
      ],
      primary_tag: {
        id: '602112e0638f28001c9994e3',
        name: 'news',
        slug: 'news',
        description: null,
        feature_image: null,
        visibility: 'public',
        meta_title: null,
        meta_description: null,
        url: 'https://wlz-blog.herokuapp.com/tag/news/'
      }
    }
    const result:string = getFirstHref(post)
    expect(result).toEqual(null)
  })
})
