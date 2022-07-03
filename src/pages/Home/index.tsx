import {
  MainContainer,
  HeaderContent,
  BodyContent,
  SearchInput,
  SearchInputContainer,
  ProfileInfoContainer,
  BodyInfoContainer,
  ThemeContainer,
  SelectContainer,
  FontSelect,
  FilterButtonContainer,
  TaskTopicsContainer,
  LastNewsContainer,
  LastNewsTitle,
} from "./styles";
import LogoLine from "../../assets/images/logoLine.svg";
import SearchIcon from "../../assets/images/searchIcon.svg";
import NotificationIcon from "../../assets/images/notificationIcon.svg";

import { Logo } from "../../components/Logo";
import { ProfileCard } from "../../components/ProfileCard";
import { ReportCard } from "../../components/ReportCard";
import { BodyTheme } from "../../components/BodyThemesFilter";
import { Buttons } from "../../components/Buttons";
import { TaskList } from "../../components/TaskList";
import { TrendingTopics } from "../../components/TrendingTopics";
import { NewsCard } from "../../components/NewsCard";

export const Home: React.FC = () => {
  return (
    <MainContainer>
      <HeaderContent>
        <div style={{ marginLeft: "104px" }}>
          <Logo logoColor="#F6F5F8" />
        </div>
        <img src={LogoLine} alt="" style={{ marginLeft: "32px" }} />
        <SearchInputContainer>
          <img
            src={SearchIcon}
            alt=""
            style={{
              position: "absolute",
              marginLeft: "18px",
              marginTop: "8px",
            }}
          />
          <SearchInput placeholder={"Busca geral"} />
        </SearchInputContainer>
        <img src={NotificationIcon} alt="" style={{ marginLeft: "392px" }} />
      </HeaderContent>
      <BodyContent>
        <ProfileInfoContainer>
          <ProfileCard
            profilePic="https://i.imgur.com/fYdZDHB.png"
            name="Cintia Ferreira"
            role="Advocacy MSF"
            email="cintiaferreira@msf.com"
          />
          <ReportCard />
        </ProfileInfoContainer>

        <BodyInfoContainer>
          <ThemeContainer>
            <BodyTheme ThemeName="Migração e Refúgio" />
            <BodyTheme ThemeName="Doenças Negligenciadas" />
            <BodyTheme
              ThemeName="Medicamentos
            e Propriedade Intelectual"
            />
            <BodyTheme ThemeName="Hepatite C" />
            <BodyTheme
              ThemeName="Crise climática
            e desastres"
            />
            <BodyTheme ThemeName="Ajuda humanitária" />
          </ThemeContainer>
          <SelectContainer>
            <FontSelect>
              <option selected value="">
                Fontes de Buscas Oficiais
              </option>
              <option value="">OMS </option>
              <option value="">ONU </option>
              <option value="">Ministério da Justiça</option>
              <option value="">Ministério das Relações Exteriores</option>
              <option value="">Diário Oficial da União </option>
              <option value="">Site do Congresso-Senado e Câmara </option>
            </FontSelect>
            <FontSelect>
              <option selected value="">
                Fontes de Midias Sociais
              </option>
              <option value="">Twitter</option>
              <option value="">Facebook</option>
              <option value="">Instagram</option>
              <option value="">LinkedIn </option>
            </FontSelect>
            <FontSelect>
              <option selected value="">
                Fontes de Mídias Informativas
              </option>
              <option value="">Folha de São Paulo</option>
              <option value="">Estadão </option>
              <option value="">Valor Econômico </option>
              <option value="">G1</option>
            </FontSelect>
          </SelectContainer>
          <FilterButtonContainer>
            <Buttons
              buttonBackgroundcolor="#4663BF"
              buttonHeight="31px"
              buttonText="Aplicar filtros"
              buttonTextColor="#FFFFFF"
              buttonWidth="163px"
            />
          </FilterButtonContainer>
          <TaskTopicsContainer>
            <TaskList />
            <TrendingTopics
              trendingName1="Enchentes"
              trendingName2="Pernambuco"
              trendingName3="Covid-19"
              trendingName4="Vacina"
              trendingName5="Bahia"
            />
          </TaskTopicsContainer>
          <LastNewsTitle>Últimas atualizações</LastNewsTitle>
          <LastNewsContainer>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </LastNewsContainer>
        </BodyInfoContainer>
      </BodyContent>
    </MainContainer>
  );
};
