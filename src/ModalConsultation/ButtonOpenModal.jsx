import React from "react";
import { styled } from "styled-components";

function ButtonOpenModal({ onClick }) {
  return (
    <WrapperButton id="сonsultation">
      <Button
        onClick={onClick}
        id="modalOpen"
        name="destiny"
        value="open modal"
      >
        Консультація
      </Button>
    </WrapperButton>
  );
}

export default ButtonOpenModal;

const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
`;
const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: solid 2px rgb(157, 133, 200);
  background-color: rgb(88, 50, 115);
  color: white;
  margin-left: auto;
  margin-right: auto;
`;
