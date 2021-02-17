import styled from 'styled-components'

const Wrapper = styled.div`
padding:20px;
background-color:${props => props.isSelected ? '#fbf6d9' : '#fff'};
box-shadow: 0px 3px 6px #00000014;
display:flex;
margin-bottom:10px;
margin-right:10px;
margin-left:10px;
overflow:auto;
position:relative;
cursor:pointer;
&:hover {
    background-color:#fbf6d9;
}
`

export default Wrapper