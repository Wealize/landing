import React from 'react'
import { mount } from 'enzyme'
import { PostOrPage } from '@tryghost/content-api'

import GhostPostCard from './index'

describe('<GhostPostCard />', () => {
  const ghostPostCardData: PostOrPage = {
    id: '6017df3f6b0d7a001c15cc7c',
    uuid: 'b4283683-b51e-4c67-ba42-66de093b1e05',
    title: 'Writing posts with Ghost ✍️',
    slug: 'the-editor',
    html: "<h2 id=\"just-start-writing\">Just start writing</h2><p>Ghost has a powerful visual editor with familiar formatting options, as well as the ability to add dynamic content.</p><p>Select your text to add formatting such as headers or to create links. Or use Markdown shortcuts to do the work for you - if that's your thing. </p><figure class=\"kg-card kg-image-card\"><img src=\"https://static.ghost.org/v2.0.0/images/formatting-editor-demo.gif\" class=\"kg-image\"></figure><h2 id=\"rich-editing-at-your-fingertips\">Rich editing at your fingertips</h2><p>The editor can also handle rich media objects, called <strong>cards</strong>, which can be organised and re-ordered using drag and drop. </p><p>You can insert a card either by clicking the  <code>+</code>  button, or typing  <code>/</code>  on a new line to search for a particular card. This allows you to efficiently insert<strong> images</strong>, <strong>markdown</strong>, <strong>html, embeds </strong>and more.</p><p><strong>For example</strong>:</p><ul><li>Insert a video from YouTube directly by pasting the URL</li><li>Create unique content like buttons or forms using the HTML card</li><li>Need to share some code? Embed code blocks directly </li></ul><pre><code>&lt;header class=\"site-header outer\"&gt;\n    &lt;div class=\"inner\"&gt;\n        {{&gt; \"site-nav\"}}\n    &lt;/div&gt;\n&lt;/header&gt;</code></pre><p>It's also possible to share links from across the web in a visual way using bookmark cards that automatically render information from a websites meta data. Paste any URL to try it out: </p><figure class=\"kg-card kg-bookmark-card\"><a class=\"kg-bookmark-container\" href=\"https://ghost.org\"><div class=\"kg-bookmark-content\"><div class=\"kg-bookmark-title\">Ghost: The #1 open source headless Node.js CMS</div><div class=\"kg-bookmark-description\">The world’s most popular modern open source publishing platform. A headless Node.js CMS used by Apple, Sky News, Tinder and thousands more. MIT licensed, with 30k+ stars on Github.</div><div class=\"kg-bookmark-metadata\"><img class=\"kg-bookmark-icon\" src=\"https://ghost.org/icons/icon-512x512.png?v=188b8b6d743c6338ba2eab2e35bab4f5\"><span class=\"kg-bookmark-publisher\">Ghost</span></div></div><div class=\"kg-bookmark-thumbnail\"><img src=\"https://ghost.org/images/meta/Ghost.png\"></div></a></figure><h2 id=\"working-with-images-in-posts\">Working with images in posts</h2><p>You can add images to your posts in many ways:</p><ul><li>Upload from your computer</li><li>Click and drag an image into the browser</li><li>Paste directly into the editor from your clipboard</li><li>Insert using a URL</li></ul><h3 id=\"image-sizes\">Image sizes</h3><p>Once inserted you can blend images beautifully into your content at different sizes and add captions and alt tags wherever needed.</p><figure class=\"kg-card kg-image-card\"><img src=\"https://static.ghost.org/v3.0.0/images/image-sizes-ghost-editor.png\" class=\"kg-image\"></figure><h3 id=\"image-galleries\">Image galleries</h3><p>Tell visual stories using the gallery card to add up to 9 images that will display as a responsive image gallery: </p><figure class=\"kg-card kg-gallery-card kg-width-wide\"><div class=\"kg-gallery-container\"><div class=\"kg-gallery-row\"><div class=\"kg-gallery-image\"><img src=\"https://static.ghost.org/v3.0.0/images/gallery-sample-1.jpg\" width=\"6000\" height=\"4000\"></div><div class=\"kg-gallery-image\"><img src=\"https://static.ghost.org/v3.0.0/images/gallery-sample-2.jpg\" width=\"5746\" height=\"3831\"></div><div class=\"kg-gallery-image\"><img src=\"https://static.ghost.org/v3.0.0/images/gallery-sample-3.jpg\" width=\"5872\" height=\"3915\"></div></div></div></figure><h3 id=\"image-optimisation\">Image optimisation</h3><p>Ghost will automatically resize and optimise your images with lossless compression. Your posts will be fully optimised for the web without any extra effort on your part.</p><h2 id=\"next-publishing-options\">Next: Publishing Options</h2><p>Once your post is looking good, you'll want to use the <a href=\"https://wlz-blog.herokuapp.com/publishing-options/\">publishing options</a> to ensure it gets distributed in the right places, with custom meta data, feature images and more.</p>",
    comment_id: '6017df3f6b0d7a001c15cc7c',
    feature_image: 'https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png',
    featured: false,
    created_at: '2021-02-01T11:00:15.000+00:00',
    updated_at: '2021-02-01T11:00:15.000+00:00',
    published_at: '2021-02-01T11:00:20.000+00:00',
    custom_excerpt: 'Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.',
    codeinjection_head: null,
    codeinjection_foot: null,
    custom_template: null,
    canonical_url: null,
    url: 'https://wlz-blog.herokuapp.com/the-editor/',
    excerpt: 'Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.',
    reading_time: 3,
    og_image: null,
    og_title: null,
    og_description: null,
    twitter_image: null,
    twitter_title: null,
    twitter_description: null,
    meta_title: null,
    meta_description: null
  }
  const wrapper = mount(<GhostPostCard post={ghostPostCardData} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find('a').length).toEqual(1)
    expect(wrapper.find('a').prop('href')).toContain(`/news-room/${ghostPostCardData.slug}`)
    expect(wrapper.find('h4').text()).toEqual(ghostPostCardData.title)
    expect(wrapper.find('span').text()).toEqual('2021-02-01T11:00:20.000+00:00')
  })
})
