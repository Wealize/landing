/* eslint-disable camelcase */
export default interface GhostTag {
  slug: string,
  id: string,
  name: string,
  description: string | null,
  feature_image: string | null,
  visibility: string,
  meta_title: string | null,
  meta_description: string | null,
  og_image: string | null,
  og_title: string | null,
  og_description: string | null,
  twitter_image: string | null,
  twitter_title: string | null,
  twitter_description: string | null,
  codeinjection_head: string | null,
  codeinjection_foot: string | null,
  canonical_url: string | null,
  accent_color: string | null,
  url: string
}
