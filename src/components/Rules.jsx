import React, { useEffect } from 'react'
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

export const Rules = ({
  password,
  min,
  max,
  lower,
  upper,  
  digits,
  specialCharacter,
  isActive,
  display="color" //color, line
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
    min: min,
    max: max
  })

  return (
    <motion.div
      initial={false}
      animate={isActive ? show : hide}
      transition={{ duration: 0.5 }}
      // animate={isActive ? show : hide}
    >
      <ul style={{ listStyle: 'none' }}>
        {hasValidLength ? (
          <li style={display === 'color' ? valid_color : valid_line}>
            between {min} and {max} character long
          </li>
        ) : (
          <li style={display === 'color' ? noValid_color : noValid_line}>
            between {min} and {max} character long
          </li>
        )}

        {upper && (
          <div>
            {hasUpperCase ? (
              <li style={display === 'color' ? valid_color : valid_line}>
                {' '}
                uppercase character
              </li>
            ) : (
              <li style={display === 'color' ? noValid_color : noValid_line}>
                uppercase character
              </li>
            )}
          </div>
        )}

        {lower && (
          <div>
            {hasLowerCase ? (
              <li style={display === 'color' ? valid_color : valid_line}>
                lowercase character
              </li>
            ) : (
              <li style={display === 'color' ? noValid_color : noValid_line}>
                lowercase character
              </li>
            )}
          </div>
        )}
        {digits && (
          <div>
            {hasDigit ? (
              <li style={display === 'color' ? valid_color : valid_line}>
                1 digit
              </li>
            ) : (
              <li style={display === 'color' ? noValid_color : noValid_line}>
                1 digit
              </li>
            )}
          </div>
        )}
        {specialCharacter && (
          <div>
            {hasSpecialChar ? (
              <li style={display === 'color' ? valid_color : valid_line}>
                1 special character
              </li>
            ) : (
              <li style={display === 'color' ? noValid_color : noValid_line}>
                1 special character
              </li>
            )}
          </div>
        )}
      </ul>
    </motion.div>
  )
}
