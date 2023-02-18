export const text = {
  fontSize: '0.75rem',
  lineHeight: '1rem'
}
export const valid_line = { ...text, textDecoration: 'line-through' }
export const noValid_line = { ...text }

export const valid_color = {
  ...text,
  color: 'green'
}
export const noValid_color = { ...text, color: 'red' }

export const show = {
  opacity: 1,
  height: 'auto',
  display: 'block'
}

export const hide = {
  opacity: 0,
  height: 0
}
