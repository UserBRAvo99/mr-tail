import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
import ButtonCloseModal from "../ModalConsultation/ButtonCloseModal";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const service = "service_4xr33lm";
const template = "template_ajb7104";
const publicKey = "OdRGBDnxZk77b-GbW";

function Consultation({ onClick, toggleModal }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, publicKey).then(
      (result) => {
        toast.success("Дякую, Ваша заявка прийнята", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
      (error) => {
        toast.error("Помилка сервера, спробуйте ще раз.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    );

    e.target.reset();
    toggleModal();
  };

  return (
    <>
      <Section>
        <ButtonCloseModal onClick={onClick} />
        <Title>Заявка на консультацію</Title>
        <ApplicationForm
          ref={form}
          onSubmit={sendEmail}
          name="Заявка на консультацію в Mr.Tail"
        >
          <WrapperInput>
            <WrapperInputBlock>
              <Input type="name" name="user_name" placeholder="Ім'я" required />
              <Input
                type="phone"
                name="user_phone"
                placeholder="Мобільний номер"
                required
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Пошта"
                required
              />
            </WrapperInputBlock>
            <WrapperInputBlock>
              <Input
                type="name"
                name="dog_name"
                placeholder="Кличка собаки"
                required
              />
              <Input
                type="number"
                name="dog_age"
                placeholder="Вік собаки"
                required
              />
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
    </>
  );
}

export default Consultation;

const Section = styled.section`
  position: relative;
  padding: 60px 30px 30px 30px;
  width: 100%;
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
