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
import NewsCard from "../../components/NewsCard";
import { getHealthNews } from "../../services/newsApi/news";
import { useState, useEffect } from "react";

interface Article {
  title: string;
  source: any;
  url: string;
  urlToImage: string;
}

export const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getNoticias = async () => {
      const response = await getHealthNews();
      setArticles(response.articles);
    };

    getNoticias();
  }, []);

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
            <BodyTheme ThemeName="Migra????o e Ref??gio" />
            <BodyTheme ThemeName="Doen??as Negligenciadas" />
            <BodyTheme
              ThemeName="Medicamentos
            e Propriedade Intelectual"
            />
            <BodyTheme ThemeName="Hepatite C" />
            <BodyTheme
              ThemeName="Crise clim??tica
            e desastres"
            />
            <BodyTheme ThemeName="Ajuda humanit??ria" />
          </ThemeContainer>
          <SelectContainer>
            <FontSelect>
              <option defaultValue="">Fontes de Buscas Oficiais</option>
              <option value="">OMS </option>
              <option value="">ONU </option>
              <option value="">Minist??rio da Justi??a</option>
              <option value="">Minist??rio das Rela????es Exteriores</option>
              <option value="">Di??rio Oficial da Uni??o </option>
              <option value="">Site do Congresso-Senado e C??mara </option>
            </FontSelect>
            <FontSelect>
              <option defaultValue="">Fontes de Midias Sociais</option>
              <option value="">Twitter</option>
              <option value="">Facebook</option>
              <option value="">Instagram</option>
              <option value="">LinkedIn </option>
            </FontSelect>
            <FontSelect>
              <option defaultValue="">Fontes de M??dias Informativas</option>
              <option value="">Folha de S??o Paulo</option>
              <option value="">Estad??o </option>
              <option value="">Valor Econ??mico </option>
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
          <LastNewsTitle>??ltimas atualiza????es</LastNewsTitle>
          <LastNewsContainer>
            {articles.map((article, index) => {
              return (
                <NewsCard
                  title={article.title}
                  url={article.url}
                  imgUrl={article.urlToImage}
                  font={article.source.name}
                  key={index}
                />
              );
            })}
          </LastNewsContainer>
        </BodyInfoContainer>
      </BodyContent>
    </MainContainer>
  );
};
