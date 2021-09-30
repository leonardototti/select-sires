import styled from "styled-components";
import { MenuButton } from "./styles";

export default function Menu({ onOpenMenu }) {
  return (
    <MenuButton onClick={onOpenMenu}>
      <img
        src="/icons/burger.svg"
        alt="Ícone do menu"
        width="19px"
        height="auto"
      />
      <span>Menu</span>
    </MenuButton>
  );
}
