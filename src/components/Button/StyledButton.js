import styled from 'styled-components'

const StyledButton = styled.button`
padding: 8px 28px;
user-select:none;
cursor:${props => props.disabled ? 'not-allowed' : 'pointer'}; 
opacity:${props => props.disabled ? '.4' : '1'}; 
font-size: 16px; 
text-transform: uppercase;
background: ${props => props.color};
color: #fff;
border-radius:4px;
box-shadow:0px 3px 6px #00000029;
border: none;
`

export default StyledButton