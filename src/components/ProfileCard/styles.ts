import styled from "styled-components";

export const ProfileBackground = styled.div`
  width: 192px;
  height: 346px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(114, 114, 114, 0.04);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ProfileInfoContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
`;
export const ProfileIconColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;
export const ProfileInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfileNameContainer = styled.div`
  font-family: "Inter500";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
`;
export const ProfileRole = styled.div`
  font-family: "Inter400";
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  /* grayscale/dark text */
  color: #252525;
  margin-bottom: 24px;
`;
export const ProfileEmail = styled.div`
  font-family: "Inter400";
  font-style: normal;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */
  /* grayscale/dark text */
  color: #252525;
  margin-bottom: 24px;
`;
export const ProfileOption = styled.div`
  font-family: "Work_Sans400";
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  /* grayscale/dark text */
  color: #252525;
  margin-bottom: 28px;
`;
