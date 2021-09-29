import stamps from "../../utils/stamps";
import {
  Container,
  PolygonPlaceholder,
  StampName,
  StampDescription,
} from "./styles";

import Modal from "react-modal";

export default function StampModal({ isOpen, onRequestClose, stampId }) {
  let stamp = stamps.find((stamp) => stamp.id === stampId);

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="stamp-modal-overlay"
      className="stamp-modal-content"
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
        <PolygonPlaceholder>
          <img
            src={`/slider/stamps-slider/${stamp.id >= 10 ? "" : "0"}${
              stamp.id
            }.png`}
          />
        </PolygonPlaceholder>
        <StampName>{stamp.name}</StampName>
        <StampDescription>{stamp.desc}</StampDescription>
      </Container>
    </Modal>
  );
}
