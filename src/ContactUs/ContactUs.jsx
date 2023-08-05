import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";

const service = "service_4xr33lm";
const template = "template_ajb7104";
const publicKey = "OdRGBDnxZk77b-GbW";

function Consultation() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <Section id="сonsultation">
      <Title>Заявка на консультацію</Title>
      <ApplicationForm
        ref={form}
        onSubmit={sendEmail}
        name="Заявка на консультацію в Mr.Tail"
      >
        <WrapperInput>
          <WrapperInputBlock>
            {/* <label>Name</label> */}
            <Input type="name" name="user_name" placeholder="Ім'я" required />
            {/* <label>Phone</label> */}
            <Input
              type="phone"
              name="user_phone"
              placeholder="Мобільний номер"
              required
            />
            {/* <label>Email</label> */}
            <Input
              type="email"
              name="user_email"
              placeholder="Пошта"
              required
            />
          </WrapperInputBlock>
          <WrapperInputBlock>
            {/* <label>Dog name</label> */}
            <Input
              type="name"
              name="dog_name"
              placeholder="Кличка собаки"
              required
            />
            {/* <label>Dog age</label> */}
            <Input
              type="number"
              name="dog_age"
              placeholder="Вік собаки"
              required
            />
            {/* <label>Dog breed</label> */}
            <Input
              type="text"
              name="dog_breed"
              placeholder="Порода собаки"
              required
            />
          </WrapperInputBlock>
        </WrapperInput>
        <Textarea name="message" placeholder="Коментар..." />
        <ButtonForm type="submit" value="Відправити" />
      </ApplicationForm>
    </Section>
  );
}

export default Consultation;

const Section = styled.section`
  padding: 20px 10px;
`;

const Title = styled.h2`
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.2rem;
`;

const ApplicationForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapperInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 2 - 20px);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: solid 2px rgb(157, 133, 200);
  background-color: rgb(234, 232, 240);
`;
const Textarea = styled.textarea`
  padding: 10px;
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
