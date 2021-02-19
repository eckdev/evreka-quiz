import styled, {keyframes} from 'styled-components'

const rotate360 = keyframes`
from {
    transform: rotate(360deg)
}
to{
    transform:rotate(0deg)
}
`;

const LoadingImg = styled.img`
width:56px;
height:56px;
animation: ${rotate360} 1s linear infinite
`
export default LoadingImg;