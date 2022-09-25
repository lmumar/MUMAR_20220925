import { isFunction } from 'underscore'

export default function translate(key, ...params) {
  const translations = window.__translations ?? {}

  const keys = key.split('.')
  const value = keys.reduce((o, k) => o[k], translations)

  if (!value) {
    console.error(`Translation missing for ${key}`)
    return key
  }

  return isFunction(value) ? value(...params) : value
}
