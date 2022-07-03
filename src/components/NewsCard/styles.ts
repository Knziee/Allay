import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 326px;
`;
export const CardTitle = styled.div`
  font-family: "Inter500";
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #252525;
  margin-top: 16px;

  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 24px;
  max-height: 62px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
export const CardFont = styled.div`
  font-family: "Inter500";
  font-size: 16px;
  line-height: 33px;
  color: #252525;
  margin-top: 16px;
  display: flex;
  align-items: left;
  margin-bottom: 48px;
`;
