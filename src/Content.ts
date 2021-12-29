import type { RequestParamsConfig } from './types/RequestParams'
import type Video from './types/Video'
import type Response from './types/Response'

import TMDB from './TMDB'

/**
 * This class fetch routes related to movies and tv series, anyone must be selected
 */
export default class Content<T, DiscoveredT> extends TMDB<DiscoveredT> {
  readonly content: string

  /**
   * @param content 'movie' to get information about movies or 'tv' for tv series
   * @param params query params to overload
   */
  constructor(content: 'movie' | 'tv', params: RequestParamsConfig = {}) {
    super(params)
    this.content = content
  }

  /**
   * It sends a request of a list of movies with the parameters
   * @param params query params to overload
   * @return the list of movies
   */
  discover(params?: RequestParamsConfig) {
    return this.get(`discover/${this.content}`, params)
  }

  /**
   * It sends a request of an especific movie
   * @param id the specific id of the movie
   * @param params query params to overload
   * @return the full information of a movie
   */
  findById(id: number, params?: RequestParamsConfig): Promise<T> {
    return this.get(`${this.content}/${id}`, params)
  }

  /**
   * It searchs a movie by keywords
   * @param query the keywords like the title or the description of the movie
   * @param page the pagination number
   */
  search(query: string, page?: number) {
    return this.get(`search/${this.content}`, { query, page })
  }

  /**
   * It sends a request of a list of videos from an specific movie
   * @param id the specific id of the movie
   * @param params query params to overload
   * @return a list of trailers of the movie from youtube, vimeo, etc.
   */
  videos(id: number, params?: RequestParamsConfig): Promise<Response<Video>> {
    return this.get(`${this.content}/${id}/videos`, params)
  }
}
