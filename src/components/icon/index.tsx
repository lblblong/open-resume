import React, { FC, useMemo } from 'react'

interface IconProps {
  value: string
  className?: string
  style?: React.CSSProperties | undefined
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const Icon: FC<IconProps> = (props) => {
  const { style, onClick } = props

  const value = useMemo(() => {
    if (props.value.startsWith('icon')) {
      return props.value
    } else {
      return 'icon-' + props.value
    }
  }, [props.value])

  return (
    <span
      className={props.className}
      style={{
        display: 'inline-flex',
        ...style,
      }}
      onClick={onClick}
    >
      <span className={value} style={{ fontSize: 'inherit' }}></span>
    </span>
  )
}
