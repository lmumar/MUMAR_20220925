// eslint-disable-next-line import/prefer-default-export
export function csrfToken(cookies) {
  const splitCookies = cookies.split('; ')
  return splitCookies
    .find(cookie => cookie.startsWith('CSRF-TOKEN='))
    .split('=')[1]
}
