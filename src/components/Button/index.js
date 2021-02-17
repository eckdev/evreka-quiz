import React,{Children} from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton'

function Button({
    type,
    onClick,
    disabled = false,
    color,
    children}) {
    return (
        <StyledButton 
        type={type}
        onClick={onClick}
        color={color}
        disabled={disabled === true ? 1 : 0}
        >
            {Children.toArray(children)}
        </StyledButton>
    )
}

export default Button
