import styled from 'styled-components'

const MenuButton = styled.button`
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

  img {
    margin-right: 15px;
  }

  span {
    font-family: Inter;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
  }
`

export default function Menu() {
  return (
    <>
      <MenuButton>
        <img src="/icons/burger.svg" alt="Ícone do menu" width="19px" height="auto"/>
        <span>Menu</span>
      </MenuButton>
    </>
  )
}