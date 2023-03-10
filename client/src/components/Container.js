import styled from "styled-components";

const Container = styled.div`
  background: #50b8da;
  width: 375px;
  height: 100vh;
  margin: auto;
  padding: 0 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ center }) => center && "justify-content: center"};
`;

export default Container;
