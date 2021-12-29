import type { DiscoveredCompany } from './Company'

export interface DiscoveredTVSerie {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  original_title: never
  overview: string //the description of the movie :)
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export default interface TVSerie extends DiscoveredTVSerie {
  created_by: {
    id: number
    name: string
  }[]
  episode_run_time: number[]
  genre_ids: never
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: TVEpisode
  networks: DiscoveredCompany[]
  next_episode_to_air: TVEpisode | null
  number_of_episodes: number
  number_of_seasons: number
  production_companies: DiscoveredCompany[]
  production_countries: {
    iso_3166_1: string
    name: string
  }
  status: string
  tagline: string
  type: string
  seasons: {
    air_date: string
    episode_count: number
    poster_path: string
    season_number: number
    overview: string
  }[]
  spoken_languages: object[]
}

export interface TVEpisode {
  air_date: string
  episode_count: number
  episode_number: number
  id: number
  name: string
  overview: string
  poster_path: string
  production_code: number | undefined
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}
