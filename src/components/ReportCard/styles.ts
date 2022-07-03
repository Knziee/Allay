import styled from "styled-components";

export const ReportCardBackground = styled.div`
  width: 192px;
  height: 353px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(114, 114, 114, 0.04);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
export const ReportCardTitle = styled.div`
  font-family: "Inter500";
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: #252525;
  margin-bottom: 24px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;
export const ReportNameDate = styled.div`
  font-family: "Inter400";
  font-style: normal;
  font-size: 12px;
  line-height: 15px;
  color: #252525;
  margin-bottom: 8px;
  margin-left: 16px;
`;
export const ReportBar = styled.div`
  width: 161px;
  height: 0px;
  border: 1px solid #dcdcdc;
  margin-bottom: 12px;
  margin-left: 16px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
