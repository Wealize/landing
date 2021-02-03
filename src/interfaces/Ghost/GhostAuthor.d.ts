/* eslint-disable camelcase */
export default interface GhostAuthor {
  id: string,
  name: string,
  slug: string,
  profile_image: string | null,
  cover_image: string | null,
  bio: string,
  website: string,
  location: string | null,
  facebook: string | null,
  twitter: string | null,
  meta_title: string | null,
  meta_description: string | null,
  url: string
}
