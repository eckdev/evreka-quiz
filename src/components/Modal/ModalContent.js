import styled from "styled-components";


const ModalContent = styled.div`
background-color: white;
width: 70%; 
max-width: 715px; 
max-height:400px;
margin: auto; 
padding: 50px 40px 30px 40px;
border-radius: 12px; 
@media (max-width: 768px) {
    max-height:430px;
}
`;
export default ModalContent;