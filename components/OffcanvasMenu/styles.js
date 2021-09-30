import styled from "styled-components";

export const Overlay = styled.div(
  ({ isOpen }) => `
  background: #000;
  height: 100%;
  left: 0;
  opacity: ${isOpen ? 0.5 : 0};
  position: fixed;
  top: 0;
  transition: opacity 300ms ease-in-out;
  width: 100%;
  z-index: 9;
  pointer-events: ${isOpen ? "all" : "none"};
`
);

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 150px;

  .close-container {
    padding: 20px;
    position: absolute;
    top: 50px;
    right: 60px;
    cursor: pointer;

    @media (max-width: 576px) {
      top: 40px;
      right: 20px;
    }
  }
`;

export const MenuLinksContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  padding-top: 150px;
`;

export const MenuLink = styled.li`
  transition: background-color 250ms, border 100ms;
  border-left: 4px solid #1a1a1a;

  &:hover {
    background-color: #272727;
    border-color: #ed1c24;

    a {
      color: #ed1c24;
    }
  }

  a {
    padding: 17px 0px;
    display: block;
    max-width: 75%;
    margin: 3px auto 0px;
    transition: 250ms;

    text-decoration: none;
    color: #fff;
    font-family: Inter;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    user-select: none;
  }
`;

export const LanguageSelector = styled.div`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.102);
  border-radius: 5px;
  padding: 15px 17px;
  position: relative;

  color: #fff;
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin: 60px auto 0;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }
`;
