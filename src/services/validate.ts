interface IValidate {
  IsEmailValid (email: string,  isBlur: boolean): string
  IsPasswordValid (password: string, isBlur: boolean): string
  IsUnelevated (email: string, password: string, userName?: string): boolean
}

const emailRegex = (val: string): boolean => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
const minPassLength = 6

const Validate: IValidate = {

  IsEmailValid (email, isBlur) {
    if(isBlur && email !== '' && !emailRegex(email)) {
      return 'Не валидный email'
    }

    return ''
  },

  IsPasswordValid (password, isBlur) {
    if(isBlur && password !== '' && password.length < minPassLength) {
      
      return `Пароль минимум ${minPassLength} символов`
    }

    return ''
  },

  IsUnelevated (email, password, userName) {
    return email !== '' 
      && password !== '' 
      && userName !== ''
      && !this.IsEmailValid(email, true)
      && !this.IsPasswordValid (password, true)
  }

}

export default Validate
  
