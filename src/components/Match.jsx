import React from 'react'
import { usePassword } from '../hooks/usePassword'
import { motion } from 'framer-motion'
import {
  valid_color,
  noValid_color,
  valid_line,
  noValid_line,
  show,
  hide
} from '../constants/style'

export const Match = ({
  password,
  confirmPassword,
  isActive,
  display="color"
}) => {
  const [
    hasDigit,
    hasSpecialChar,
    isMatch,
    hasUpperCase,
    hasValidLength,
    hasLowerCase
  ] = usePassword({
    password: password,
    confirmPassword: confirmPassword
  })

  return (
    <motion.div
      initial={false}
      animate={isActive ? show : hide}
      transition={{ duration: 0.5 }}
    >
      {isMatch ? (
        <p style={display === 'color' ? valid_color : valid_line}>
          password match
        </p>
      ) : (
        <p style={display === 'color' ? noValid_color : noValid_line}>
          password not matched
        </p>
      )}
    </motion.div>
  )
}
