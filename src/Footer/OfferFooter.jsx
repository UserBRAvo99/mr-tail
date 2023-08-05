import React from "react";
import { styled } from "styled-components";

function OfferFooter() {
  return (
    <Wrapper id="offer">
      <Title>Співпраця</Title>
      <Form action="">
        <InputWrapper>
          <InputWrapperNameEmail>
            <Input type="name" name="company" placeholder="Компанія" required />
            <Input type="email" name="email" placeholder="Пошта" required />
          </InputWrapperNameEmail>
          <Textarea type="text" name="comment" placeholder="Коментар..." />
        </InputWrapper>
        <ButtonForm type="submit" value="Відправити" />
      </Form>
    </Wrapper>
  );
}

export default OfferFooter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;
const Title = styled.h2`
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.2rem;
`;
const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const InputWrapperNameEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  width: 190px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: solid 2px rgb(157, 133, 200);
  background-color: rgb(234, 232, 240);
`;

const Textarea = styled.textarea`
  padding: 10px;
  width: 190px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: solid 2px rgb(157, 133, 200);
  background-color: rgb(234, 232, 240);
  resize: none;
`;

const ButtonForm = styled.input`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  padding: 10px;
  border: solid 2px rgb(157, 133, 200);
  background-color: rgb(88, 50, 115);
  color: white;
`;
