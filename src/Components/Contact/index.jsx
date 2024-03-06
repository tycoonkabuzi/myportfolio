import styled from "styled-components";
import colors from "../../utilities/style/Colors";
import Buttons from "../../utilities/style/Buttons";
import { ThemeContext } from "../../utilities/context";
import { useContext, useState } from "react";

const Main = styled.div`
  padding-top: 150px;
`;
const HeaderTitle = styled.h2`
  text-align: center;
  padding-bottom: 100px;
  color: ${(props) => (props.theme === true ? `${colors.primary}` : `white`)};
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  gap: 50px;
  margin: auto;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 50% 50%;
  }
`;
const KeepInTouchContainer = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 100px;
`;
const Subtitle = styled.h4`
  color: ${colors.primaryPurpule};
`;
const Title = styled.h1`
  font-size: 50px;
  line-height: 0px;
  padding-bottom: 50px;
  color: ${(props) =>
    props.theme === true
      ? `${colors.nightColor}`
      : `${colors.paragraphColorWhite}`};
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 50px;
  }
`;
const SmallDescription = styled.div`
  padding-bottom: 50px;
  color: ${(props) =>
    props.theme === true
      ? `${colors.nightColor}`
      : `${colors.paragraphColorWhite}`};
`;
const MainText = styled.div`
  color: ${(props) =>
    props.theme === true
      ? `${colors.nightColor}`
      : `${colors.paragraphColorWhite}`};
`;
const TextContainer = styled.div``;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TextField = styled.input`
  color: ${colors.paragraphColorWhite};
  height: 40px;
  background-color: ${(props) =>
    props.theme === true ? `${colors.secondary}` : `${colors.primary}`};
  border: none;
  border-bottom: 1px solid ${colors.paragraphColorWhite};
  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.primaryPurpule};
  }
  &::placeholder {
    color: ${colors.paragraphColorWhite};
  }
`;
const Message = styled.textarea`
  height: 100px;
  background-color: ${(props) =>
    props.theme === true ? `${colors.secondary}` : `${colors.primary}`};
  border: none;
  border-bottom: 1px solid ${colors.paragraphColorWhite};
  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.primaryPurpule};
  }
  &::placeholder {
    color: ${colors.paragraphColorWhite};
  }
`;
const Footer = styled.div`
  text-align: center;
  border-top: 1px solid
    ${(props) =>
      props.theme === true
        ? `${colors.nightColor}`
        : `${colors.paragraphColorWhite}`};
  padding-top: 50px;
  padding-bottom: 50px;
  color: ${(props) =>
    props.theme === true
      ? `${colors.nightColor}`
      : `${colors.paragraphColorWhite}`};
`;
const ErrorMessage = styled.p`
  color: red;
`;
function Contact() {
  const { theme } = useContext(ThemeContext);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    messageContent: "",
  });
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  function handleChange(e) {
    const value = e.target.value;

    const name = e.target.name;
    setMessage({
      ...message,
      [name]: value,
    });
    if (!message.email.includes("@")) {
      setErrorEmail(" your email adress does not contains @");
    } else if (!message.email.includes(".")) {
      setErrorEmail("your email adress is incorrect");
    } else {
      setErrorEmail("");
    }
    if (message.name.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) {
      setErrorName("Numbers are not allowed in name");
    } else if (message.name.includes(".")) {
      setErrorName("Names do not contains special characters");
    } else {
      setErrorName("");
    }
  }
  function handleSubmit() {
    alert(
      `${message.name} your email has been sent successfull using ${message.email}`
    );
  }

  return (
    <Main id="contact">
      <KeepInTouchContainer>
        <HeaderTitle theme={theme}> CONTACT</HeaderTitle>
        <Container>
          <TextContainer>
            <Subtitle>MY_PORTFOLIO</Subtitle>
            <Title theme={theme}>Keep in Touch</Title>
            <SmallDescription theme={theme}>
              I build identities and creation of the bigest way of creation,
              this is what i call tycoon's creation
            </SmallDescription>
            <MainText theme={theme}>
              WhatEver I do, it is done for the best of our communities, I know
              I do not have the right to talk about it that much, I would like
              you to be able to understand what is the best between being with
              me and being with someone else, I am together with my brother and
              we are trying to see the video.
            </MainText>
          </TextContainer>
          <FormContainer action="mailto:kabuzitycoon@gmail.com">
            <TextField
              onChange={handleChange}
              theme={theme}
              type="text"
              name="name"
              placeholder=" Your name"
            />
            <ErrorMessage>{errorName}</ErrorMessage>
            <TextField
              onChange={handleChange}
              theme={theme}
              name="email"
              type="Email"
              placeholder="Email Addres"
            />
            <ErrorMessage>{errorEmail}</ErrorMessage>
            <Message
              name="messageContent"
              onChange={handleChange}
              theme={theme}
              placeholder="Message"
            />

            <Buttons
              type="submit"
              secondary
              theme={theme}
              onClick={handleSubmit}
            >
              Keep in Touch
            </Buttons>
          </FormContainer>
        </Container>
      </KeepInTouchContainer>
      <Footer theme={theme}>copyright Kabuzi Ntwali</Footer>
    </Main>
  );
}

export default Contact;
