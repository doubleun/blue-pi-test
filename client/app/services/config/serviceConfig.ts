import axios from 'axios'

/**
 * Base api server base url
 */
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

/**
 * Axios instance
 */
export const request = axios.create({
  baseURL: apiBaseUrl,
})
