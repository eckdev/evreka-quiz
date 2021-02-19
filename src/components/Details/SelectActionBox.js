import styled from "styled-components";


const SelectActionButton = styled.div`
background: ${props => props.active ? '#454F63' : '#f4f4f4'};
box-shadow: 0px 3px 6px #00000029;
text-align:left;
padding: 13px 18px 17px 18px;
display:flex;
flex-direction:column;
cursor:pointer;

&:first-child {
    margin-top:32px;
    margin-bottom:12px;
}
${
    props => !props.active ? `&:hover{
        background: #e3e3e3;
    }` : ''
}

`;
export default SelectActionButton;