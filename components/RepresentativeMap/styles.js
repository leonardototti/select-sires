import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: #333333;
    stroke: #000;
    stroke-width: 0.5px;

    &:hover {
      fill: #eb1b24;
    }
  }
`;
