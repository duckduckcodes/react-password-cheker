import { useState, useEffect } from 'react'

export const usePassword = ({
  password = '',
  confirmPassword = '',
  min = 10,
  max = 30
}) => {
  const [isValidPassword, setIsValidPassword] = useState({
    hasLowerCase: false,
    hasUpperCase: false,
    hasDigit: false,
    hasSpecialChar: false,
    isMatch: false,
    hasValidLength: false
  })

  useEffect(() => {
    const hasLowerCase = /[a-z]/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasDigit = /[0-9]/.test(password)
    const hasSpecialChar = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password)
    const hasValidLength = password.length >= min && password.length <= max
    const isMatch = password && password === confirmPassword
    setIsValidPassword({
      hasLowerCase,
      hasUpperCase,
      hasDigit,
      hasSpecialChar,
      hasValidLength,
      isMatch
    })
  }, [password, confirmPassword, min, max])

  const {
    hasLowerCase,
    hasUpperCase,
    hasDigit,
    hasSpecialChar,
    hasValidLength,
    isMatch
  } = isValidPassword

  return [
    hasDigit,
    hasSpecialChar,
    isMatch,
    hasUpperCase,
    hasValidLength,
    hasLowerCase
  ]
}
