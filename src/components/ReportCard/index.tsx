import {
  ReportCardBackground,
  ReportCardTitle,
  ReportNameDate,
  ReportBar,
  ButtonContainer,
} from "./styles";

import { Buttons } from "../Buttons";

interface ReportCardProps {
  tipo?: string;
  data?: string;
}

export const ReportCard: React.FC<ReportCardProps> = ({ tipo, data }) => {
  return (
    <ReportCardBackground>
      <ReportCardTitle>Meus Relatórios</ReportCardTitle>
      <ReportNameDate>Notícias - 01/07/22</ReportNameDate>
      <ReportBar />
      <ReportNameDate>Mídias sociais - 29/06/22</ReportNameDate>
      <ReportNameDate>Mídias sociais - 29/06/22</ReportNameDate>
      <ReportNameDate>Notícias - 29/06/22</ReportNameDate>
      <ReportBar />
      <ReportNameDate>Notícias - 22/06/22</ReportNameDate>
      <ReportNameDate>Sites oficiais - 22/06/22</ReportNameDate>
      <ReportBar />
      <ButtonContainer>
        <Buttons
          buttonBackgroundcolor="#4663BF
        "
          buttonHeight="31px"
          buttonText="Ver todos"
          buttonTextColor="#FFFFFF"
          buttonWidth="163px"
        />
        <Buttons
          buttonBackgroundcolor="#FFFFFF
        "
          buttonHeight="31px"
          buttonText="Ver minha lista"
          buttonTextColor="#4663BF"
          buttonWidth="163px"
        />
      </ButtonContainer>
    </ReportCardBackground>
  );
};
