import styled from "styled-components";

export const ThemeBackground = styled.div`
  width: 100%;
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(114, 114, 114, 0.04);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  :hover {
    border: 2px solid #4663bf;
  }
`;
export const ThemeText = styled.div`
  font-family: "Fira_Sans400";
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
  gap: 8px;
  color: #000000;
`;
