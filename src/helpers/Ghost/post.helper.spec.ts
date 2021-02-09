import { PostOrPage } from '@tryghost/content-api'

import { getSluggedTagsFromPost } from './post.helper'
describe('getSluggedTagsFromPostsSlug()', () => {
  it('should return correct slugged tags from post', () => {
    const post: PostOrPage = {
      id: '602112b7638f28001c9994dc',
      uuid: 'eaa52af4-ca2e-46b1-a471-ddde428631c3',
      title: 'Test client story post',
      slug: 'test-client-storie-post',
      html: '<p>Test client storie post</p>',
      comment_id: '602112b7638f28001c9994dc',
      feature_image: null,
      featured: false,
      created_at: '2021-02-08T10:30:15.000+00:00',
      updated_at: '2021-02-08T10:30:55.000+00:00',
      published_at: 'Monday, February 8, 2021',
      custom_excerpt: null,
      codeinjection_head: null,
      codeinjection_foot: null,
      custom_template: null,
      canonical_url: null,
      tags: [
        {
          id: '602112e0638f28001c9994e3',
          name: 'Client Story',
          slug: 'client-story',
          description: null,
          feature_image: null,
          visibility: 'public',
          meta_title: null,
          meta_description: null,
          url: 'https://wlz-blog.herokuapp.com/tag/client-story/'
        }
      ],
      primary_tag: {
        id: '602112e0638f28001c9994e3',
        name: 'Client Story',
        slug: 'client-story',
        description: null,
        feature_image: null,
        visibility: 'public',
        meta_title: null,
        meta_description: null,
        url: 'https://wlz-blog.herokuapp.com/tag/client-story/'
      },
      url: 'https://wlz-blog.herokuapp.com/test-client-storie-post/',
      excerpt: 'Test client storie post',
      reading_time: 0,
      og_image: null,
      og_title: null,
      og_description: null,
      twitter_image: null,
      twitter_title: null,
      twitter_description: null,
      meta_title: null,
      meta_description: null
    }
    const result:string[] = getSluggedTagsFromPost(post)
    expect(result).toEqual(['client-story'])

    const resultNullPost:string[] = getSluggedTagsFromPost(null)
    expect(resultNullPost).toEqual([])
  })
})
