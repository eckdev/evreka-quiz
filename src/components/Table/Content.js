import styled from 'styled-components'

const Content = styled.span`
font-weight: ${props => props.isBold ? 'bold' : '300'};
font-size:13px;
color: #172C49;
margin-bottom: ${props => props.isBold ? '10px' : '0'}
`

export default Content