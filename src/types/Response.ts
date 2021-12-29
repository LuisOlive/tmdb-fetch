export default interface Response<T> {
  page: number
  total_results: number
  total_pages: number
  results: T[]
}
