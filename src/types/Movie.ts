import type Image from './Image'

export interface DiscoveredMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}

export default interface Movie extends DiscoveredMovie {
  belongs_to_collection: {
    backdrop_path: string
    id: number
    name: string
    poster_path: string
  }
  budget: number

  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  images?: {
    backdrops: Image[]
    posters: Image[]
  } //only with the query &append_to_response=images&include_image_language={{your language}}

  imdb_id: string
  name: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  revenue: string
  runtime: number
  spoken_languages: {
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
}
