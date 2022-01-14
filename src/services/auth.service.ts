import { api } from '../boot/axios'
import axios from 'axios'
import { Store } from '../store/'
import { apiRouter } from '../router/'
// import { addRefreshToken } from './auth.header'

export type TSignInPayload = {
  identifier: string,
  password: string
}

type TSignUpPayload = {
  username: string,
  email: string,
  password: string,
  checkboxMail: boolean,
}

interface IAxiosAPI {
  signIn(payload: TSignInPayload): void | Promise<number | undefined>
  signUp(payload: TSignUpPayload): void | Promise<number | undefined>
  logout(): void
  // tokenRefresh(): void
  _updateUserData(data: ITokenResponse['data']): void
  _catchError(error: unknown): void
}

export interface ITokenResponse {
  msg: string
  status: number
  data: {
      jwt: string
    user: {
      confirmed: boolean
      blocked: boolean
      _id: string
      email: string
      username: string
      provider: string
      paymentMethods: [
        {
          paymentSystem: string
          last4: string
        }
      ]
      billingInfo: [
        {
          name: string
          email: string
          phone: string
        }
      ]
      createdAt: string
      updatedAt: string
      __v: number
      role: {
        _id: string
        nam: string
        description: string
        type: string
        __v: number
        id: string
      },
      orders: []
      id: string
    }
  }
}

interface CommonHeaderProperties {
  'Authorization': string | null
}

export const AuthService: IAxiosAPI = {

  async signIn(payload) {
    try {
      const { status, data }: ITokenResponse = await api.post('/auth/local', { ...payload })
      if (status === 200) {
        this._updateUserData(data)

        apiRouter.push({ path: '/dashboard' }).catch(err => console.log(err)) // ?

      } else {
        return status
      } 
    } catch (error) {
      this._catchError(error)
    }
  },

  async signUp(payload) {
    try {
      const { status, data }: ITokenResponse = await api.post('/auth/local/register', { ...payload })

      if (status === 200) {
        this._updateUserData(data)

        apiRouter.push({ path: '/dashboard' }).catch(err => console.log(err))

      } else {
        return status
      }
    } catch (error) {
      this._catchError(error)
    }
  },

  // async tokenRefresh () {
  //   try {
  //     const refreshToken = addRefreshToken()
  //     const { status, data }: ITokenResponse = await api.post('token/refresh', refreshToken)
  //     if (status === 200) {
  //       this._updateUserData(data)

  //     } else if (status === 401) {

  //       const { path: current_route } = apiRouter.currentRoute.value

  //       if (current_route !== '/auth/signup') apiRouter.push({ path: '/auth/login' }).catch(err => console.log(err))

  //     } else {
  //       apiRouter.push({ path: '/auth/login' }).catch(err => console.log(err))
  //     }
  //   } catch (error) {
  //       this._catchError(error)
  //   }
  // },

  logout() {
    Store.commit('removeToken')
    return localStorage.removeItem('accessToken');
  },

  _updateUserData(data) {
    const accessToken = data.jwt
    Store.commit('app/setToken', accessToken)
    Store.commit('app/updateUser', data.user);

    (api.defaults.headers as unknown as Record<string, CommonHeaderProperties>).common['Authorization'] = `Bearer ${accessToken}`

    localStorage.setItem('accessToken', JSON.stringify(data.jwt))
  },

  _catchError(error) {
    if(axios.isAxiosError(error)) {
      return error.response?.status
    }

    console.error(error)
  },
}