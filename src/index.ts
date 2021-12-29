import type { RequestParamsConfig } from './types/RequestParams'
import type Movie from './types/Movie'
import type { DiscoveredMovie } from './types/Movie'
import type TVSerie from './types/TVSerie'
import type { DiscoveredTVSerie } from './types/TVSerie'

import TMDB from './TMDB'
import Content from './Content'

function tmdb(api_key: string, params?: RequestParamsConfig) {
  if (params) {
    TMDB.defaultParams = params
  }

  TMDB.defaultParams.api_key = api_key

  return tmdb
}

/**
 * completes a received short image name url in full url of image
 * in typescript, it has a size validation
 */
tmdb.image = (image: string, width: 'original' | 200 | 300 | 400 | 500 = 500) => {
  const w = width === 'original' ? '' : 'w'
  return `https://image.tmdb.org/t/p/${w}${width}${image}`
}

/**
 * @param params query params to overload
 * @returns a instance of class Content to get information about movies
 */
tmdb.movies = (params?: RequestParamsConfig): Content<Movie, DiscoveredMovie> =>
  new Content('movie', params)

/**
 * @param params query params to overload
 * @returns a instance of class Content to get information about tv series
 */
tmdb.tvSeries = (params?: RequestParamsConfig): Content<TVSerie, DiscoveredTVSerie> =>
  new Content('tv', params)

export default tmdb
