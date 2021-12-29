import type { RequestParams, RequestParamsConfig } from './types/RequestParams'
import type Response from './types/Response'

// @ts-ignore
import objectToQuery from 'object-to-querystring'
import genres from './consts/genres'

/**
 * Main tmdb class, every instance has request configuration as language or genre and can
 * fetch the tmdb api to get the content
 */
export default class TMDB<T> {
  readonly params: RequestParams
  static defaultParams: RequestParamsConfig = {}
  static genres = genres

  /**
   * @param params api config equivalent to query params of tmdb api
   */
  constructor(params: RequestParamsConfig = {}) {
    this.params = this.$normalizeParams({ ...TMDB.defaultParams, ...params })
  }

  /**
   * Transforms particular values from an object to be fully readable to tmdb server
   * @param params any object
   */
  protected $normalizeParams(params?: object): object {
    if (typeof params !== 'object' || params === {}) return {}
    // @ts-ignore
    const prd = params.primary_release_date
    const nil = '_'

    if (prd) {
      // @ts-ignore
      params['primary_release_date.lte'] = prd.lte
      // @ts-ignore
      params['primary_release_date.gte'] = prd.gte
      // @ts-ignore
      delete params.primary_release_date
    }

    // @ts-ignore
    if (params.with_genres) {
      // @ts-ignore
      params.with_genres = params.with_genres.map(
        // @ts-ignore
        g => (typeof g === 'string' ? genres[g] : g)
      )
    }

    Object.keys(params).forEach(key => {
      // @ts-ignore
      const value = params[key] ?? nil

      if (value === nil) {
        // @ts-ignore
        delete params[key]
      }

      if (Array.isArray(value)) {
        // @ts-ignore
        params[key] = value.join('|')
      }
    })
    return params
  }

  /**
   * It validates and normalizes data to send and sends a request to the url https://api.themoviedb.org/3
   *
   * @param route the route endpoint of the api request directly as a string
   * @param specialParams the object of params you want to append or overload
   *
   * @return the promise with the information of TMDb object
   */
  get<S = Response<T>>(route: String, specialParams?: object): Promise<S> {
    const slash = route[0] === '/' ? '' : '/'
    return this.$get(slash + route, { ...this.params, ...this.$normalizeParams(specialParams) })
  }

  /**
   * Very elemental and pure "get method" to send the request to Api. better use get()
   * @param route full route since https://api.themoviedb.org/3/{{ route }}
   * @param params config in json to Axios. itsn't validated in any way
   */
  protected async $get<S>(route: String, params?: object): Promise<S> {
    return (await fetch(`https://api.themoviedb.org/3${route}${objectToQuery(params)}`)).json()
  }
}
