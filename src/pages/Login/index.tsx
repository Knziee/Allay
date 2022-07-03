import {
  MainContainer,
  MediumContainerLeft,
  MediumContainerRight,
  LogoBox,
  LoginBox,
  LoginText,
  LoginInput,
  ForgotPasswordText,
  ButtonBox,
  BannerTitle,
  BannerText,
  AlternativeLine,
  AlternativeText,
  AlternativeButton,
  AlternativeContainer,
} from "./styles";
import { Logo } from "../../components/Logo";
import { Buttons } from "../../components/Buttons";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <MainContainer>
      <MediumContainerLeft>
        <LogoBox>
          <Logo logoColor="#001635" />
        </LogoBox>
        <LoginBox>
          <LoginText>Login</LoginText>
          <LoginInput placeholder={"Nome de usuário ou e-mail"} />
          <LoginInput placeholder={"Senha"} />
          <ForgotPasswordText>Esqueci minha senha.</ForgotPasswordText>
          <ButtonBox>
            <Buttons
              buttonBackgroundcolor="#4663BF"
              buttonText="ENTRAR"
              buttonTextColor="white"
            />
            <Buttons
              buttonBackgroundcolor="white"
              buttonText="CADASTRAR"
              buttonTextColor="#34378B"
            />
          </ButtonBox>
          <AlternativeContainer>
            <AlternativeLine />
            <AlternativeText>ou</AlternativeText>
            <AlternativeLine />
          </AlternativeContainer>
          <Link to="/home">
            <AlternativeButton>ACESSE UMA DEMO</AlternativeButton>
          </Link>
        </LoginBox>
      </MediumContainerLeft>
      <MediumContainerRight>
        <BannerTitle>ALLAY</BannerTitle>
        <BannerText>Informação e análise do jeito que você precisa.</BannerText>
      </MediumContainerRight>
    </MainContainer>
  );
};
