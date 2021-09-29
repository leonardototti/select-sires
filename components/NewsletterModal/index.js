import {
  Container,
  NewsletterTitle,
  NewsletterSubTitle,
  Input,
  NewsletterJoin,
} from "./styles";
import Modal from "react-modal";

export default function StampModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="newsletter-modal-overlay"
      className="newsletter-modal-content"
      onScroll={(e) => console.log("aaa")}
    >
      <Container>
        <div className="close-icon-container" onClick={onRequestClose}>
          <img
            className="close-icon"
            src="/icons/closemodal.svg"
            width="11px"
            height="11px"
          />
        </div>
        <NewsletterTitle>Receba nossas novidades</NewsletterTitle>
        <NewsletterSubTitle>Informe seu nome e e-mail</NewsletterSubTitle>
        <Input
          style={{ marginBottom: "20px" }}
          placeholder="Nome"
          type="email"
        />
        <Input placeholder="E-mail" />
        <NewsletterJoin>Cadastre-se</NewsletterJoin>
      </Container>
    </Modal>
  );
}
