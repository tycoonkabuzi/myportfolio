import styled from "styled-components";
import colors from "../../utilities/style/Colors";
import Buttons from "../../utilities/style/Buttons";
import { ThemeContext } from "../../utilities/context";
import { useContext } from "react";
const Main = styled.div`
  padding-top: 200px;
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
  display: grid;
  grid-template-columns: auto;
`;
const TextField = styled.input`
  background-color: ${(props) =>
    props.theme === true ? `${colors.secondary}` : `${colors.primary}`};
  border: none;
  border-bottom: 1px solid ${colors.paragraphColorWhite};
`;
const Message = styled.textarea`
  background-color: ${(props) =>
    props.theme === true ? `${colors.secondary}` : `${colors.primary}`};
  border: none;
  border-bottom: 1px solid ${colors.paragraphColorWhite};
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

function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <Main>
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
          <FormContainer action="">
            <TextField theme={theme} type="text" placeholder=" Your name" />
            <TextField theme={theme} type="Email" placeholder="Email Addres" />
            <Message theme={theme} placeholder="Message" />
            <Buttons theme={theme} secondary>
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
