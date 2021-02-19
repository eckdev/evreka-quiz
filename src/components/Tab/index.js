import styled from "styled-components";
export const Tabs = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #8997B2;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  font-size:16px;
  font-weight: bold;
  opacity: ${props => props.active ? '1' : '.2'};
  color: #454F63;
  text-transform:uppercase;
  margin-right:50px;
  padding-bottom:5px;
  border-bottom: ${props => (props.active ? "4px solid #3DA836" : "")};
  background-color: #fff;
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;