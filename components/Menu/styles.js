import styled from "styled-components";

export const MenuButton = styled.button`
  background: #fff;
  border-radius: 50px;
  padding: 20px 35px;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3));
  user-select: none;
  cursor: pointer;

  img {
    margin-right: 15px;
    filter: grayscale(1);
    transition: filter 0.3s;
  }

  span {
    font-family: Inter;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;

    transition: color 0.3s;
  }

  &:hover {
    img {
      filter: grayscale(0);
    }

    span {
      color: #ed1c24;
    }
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    padding: 0;

    img {
      margin-right: 0;
      margin-top: 3px;
    }

    span {
      display: none;
    }
  }
`;
