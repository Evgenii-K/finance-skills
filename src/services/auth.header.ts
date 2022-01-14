export function authHeader() {
  const store: string | null = localStorage.getItem('accessToken')

  if(!store) return ({})
  const accessToken: string = JSON.parse(store) as string

  if (accessToken) {
    return { 'Authorization': `Bearer ${accessToken}` }
  } else {
    return {};
  }
}

export function addRefreshToken() {
  const store: string | null = localStorage.getItem('refreshToken')

  if(!store) return ''
  const refreshToken: string = JSON.parse(store) as string

  if (refreshToken) {
    return refreshToken
  } else {
    return '';
  }
}