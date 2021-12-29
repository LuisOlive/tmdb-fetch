import type Genre from './Genre'

export interface DateInterval {
  gte?: string // minimum date
  lte?: string // maximum date
}

export interface RequestParamsConfig {
  api_key?: string
  sort_by?:
    | 'popularity.asc'
    | 'popularity.desc'
    | 'release_date.asc'
    | 'release_date.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'original_title.asc'
    | 'original_title.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc'
  query?: string
  page?: number
  year?: number
  include_adult?: boolean
  with_genres?: Genre | Genre[]
  primary_release_date?: DateInterval | string
  language?: string
  append_to_response?: string
  include_image_language?: string
  with_release_type?: 1 | 2 | 3 | 4 | 5 | 6
  without_genres?: Genre | Genre[]
  video?: boolean
}

export type RequestParams = RequestParamsConfig & {
  'primary_release_date.lte'?: string
  'primary_release_date.gte'?: string
  with_genres?: number | string
  without_genres?: number | string
}
