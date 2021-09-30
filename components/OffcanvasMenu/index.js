import { StyledOffCanvas, Menu } from "styled-off-canvas";
import {
  Overlay,
  Container,
  MenuLinksContainer,
  MenuLink,
  LanguageSelector,
} from "./styles";

export default function OffcanvasMenu({ isOpen, onCloseMenu }) {
  return (
    <StyledOffCanvas
      isOpen={isOpen}
      onClose={onCloseMenu}
      menuBackground="#1a1a1a"
      width="400px"
      menuDuration="300ms"
    >
      <Menu>
        <Container>
          <div className="close-container" onClick={onCloseMenu}>
            <img src="/icons/menu-close.png" width="18px" height="18px" />
          </div>
          <MenuLinksContainer>
            <MenuLink>
              <a href="#">TOUROS CORTE</a>
            </MenuLink>
            <MenuLink>
              <a href="#">TOUROS LEITE</a>
            </MenuLink>
            <MenuLink>
              <a href="#">SOLUÇÕES</a>
            </MenuLink>
            <MenuLink>
              <a href="#">SOBRE NÓS</a>
            </MenuLink>
            <MenuLink>
              <a href="#">MONTE SEU CATÁLOGO</a>
            </MenuLink>
            <MenuLink>
              <a href="#">DEPOIMENTOS</a>
            </MenuLink>
            <MenuLink>
              <a href="#">NOTÍCIAS</a>
            </MenuLink>
            <MenuLink>
              <a href="#">ACASALAMENTO E GENÉTICA</a>
            </MenuLink>
            <MenuLink>
              <a href="#">ENCONTRE UM REPRESENTANTE</a>
            </MenuLink>
            <MenuLink>
              <a href="#">TRABALHE CONOSCO</a>
            </MenuLink>
            <MenuLink>
              <a href="#">FALE CONOSCO</a>
            </MenuLink>
          </MenuLinksContainer>

          <LanguageSelector>
            Português
            <img src="/icons/language-arrow.png" width="8px" height="6px" />
          </LanguageSelector>
        </Container>
      </Menu>
      <Overlay isOpen={isOpen} onClick={onCloseMenu} />
    </StyledOffCanvas>
  );
}
