import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  background-color: #34378b;
  margin-left: auto;
  margin-right: auto;
`;
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-bottom: 53px;
  margin-top: 37px;
`;

export const SearchInputContainer = styled.div`
  width: 459px;
  height: 40px;
  border-radius: 10px;
  margin-left: 304px;
`;
export const SearchInput = styled.input`
  width: 459px;
  height: 40px;
  background: #f7f7f7;
  border-radius: 10px;
  ::placeholder {
    padding-left: 64px;
  }
`;
export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 1392px;
  background: #f6f5f8;
  border-radius: 10px;
`;
export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;
  height: 646px;
  margin-left: 61px;
  margin-right: 45px;
  margin-top: 40px;
`;
export const BodyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1222px;
  height: 100%;
  margin-right: 52px;
  margin-top: 40px;
`;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 19px;
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-top: 32px;
  margin-bottom: 40px;
  gap: 51px;
`;
export const FontSelect = styled.select`
  width: 284px;
  height: 36px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: "Fira_Sans500";
  font-size: 16px;
  color: #616067;
  padding-left: 16px;
`;
export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  margin-right: 82px;
`;
export const TaskTopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 77px;
`;
export const LastNewsContainer = styled.div`
  display: flex;
  gap: 23px;
  flex-wrap: wrap;
`;
export const LastNewsTitle = styled.div`
  display: flex;
  align-items: left;
  font-family: "Inter600";
  font-size: 32px;
  line-height: 33px;
  color: #252525;
  margin-bottom: 20px;
  margin-top: 96px;
`;
