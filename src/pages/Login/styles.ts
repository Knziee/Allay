import styled from "styled-components";
import bannerImg from "../../assets/images/bannerLogin.png";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const MediumContainerLeft = styled.div`
  display: flex;
  width: 715px;
  height: 900px;
  flex-direction: column;
`;
export const MediumContainerRight = styled.div`
  display: flex;
  width: 725px;
  flex-direction: column;
  justify-content: center;
  background: url(${bannerImg});
  color: white;
`;
export const LogoBox = styled.div`
  display: flex;
  text-align: left;
  margin-top: 37px;
  margin-left: 81px;
`;
export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 200px;
`;
export const LoginText = styled.div`
  font-family: "Fira_Sans500";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  color: #404040;
  margin-bottom: 59px;
`;
export const LoginInput = styled.input`
  background: #ffffff;
  border: 1.5px solid #cbd5e0;
  border-radius: 50px;
  width: 327px;
  height: 40px;
  margin-bottom: 24px;
  ::placeholder {
    padding-left: 15px;
    color: #cbd5e0;
  }
`;

export const ForgotPasswordText = styled.div`
  font-family: "Work_Sans600";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #383e56;
  margin-left: 170px;
  margin-top: -10px;
`;
export const ButtonBox = styled.div`
  margin-top: 59px;
  display: flex;
  flex-direction: column;
`;

export const BannerTitle = styled.div`
  font-family: "Fira_Sans500";
  font-size: 48px;
  line-height: 60px;
  text-align: center;
`;
export const BannerText = styled.div`
  font-family: "Fira_Sans500";
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  margin-bottom: 230px;
  margin-top: 90px;
`;

export const AlternativeLine = styled.div`
  width: 145.03px;
  height: 0px;
  left: 194px;
  top: 758.5px;
  border: 0.5px solid #dcdcdc;
  margin-top: 10px;
`;

export const AlternativeText = styled.div`
  font-family: "Work_Sans400";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #252525;
  margin-left: 8px;
  margin-right: 8px;
`;

export const AlternativeButton = styled.div`
  font-family: "Work_Sans700";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #34378b;
  :hover {
    cursor: pointer;
  }
`;
export const AlternativeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-bottom: 36px;
`;
