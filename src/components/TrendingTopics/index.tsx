import {
  TrendingTopicsBackground,
  TrendingTopicsTitle,
  TrendingTopicsDescription,
  TrendingTopicsList,
  TrendingTopicsItem,
  TrendingTopicsNumber,
} from "./styles";

interface TrendingProps {
  trendingName1?: string;
  trendingName2?: string;
  trendingName3?: string;
  trendingName4?: string;
  trendingName5?: string;
}
export const TrendingTopics: React.FC<TrendingProps> = ({
  trendingName1,
  trendingName2,
  trendingName3,
  trendingName4,
  trendingName5,
}) => {
  return (
    <TrendingTopicsBackground>
      <TrendingTopicsTitle>Assuntos em alta</TrendingTopicsTitle>
      <TrendingTopicsDescription>
        Veja abaixo as palavras e termos mais frequentes.
      </TrendingTopicsDescription>
      <TrendingTopicsList>
        <TrendingTopicsItem>
          <TrendingTopicsNumber>1º</TrendingTopicsNumber> {trendingName1}
        </TrendingTopicsItem>
        <TrendingTopicsItem>
          <TrendingTopicsNumber>2º</TrendingTopicsNumber> {trendingName2}
        </TrendingTopicsItem>
        <TrendingTopicsItem>
          <TrendingTopicsNumber>3º</TrendingTopicsNumber> {trendingName3}
        </TrendingTopicsItem>
        <TrendingTopicsItem>
          <TrendingTopicsNumber>4º</TrendingTopicsNumber> {trendingName4}
        </TrendingTopicsItem>
        <TrendingTopicsItem>
          <TrendingTopicsNumber>5º</TrendingTopicsNumber> {trendingName5}
        </TrendingTopicsItem>
      </TrendingTopicsList>
    </TrendingTopicsBackground>
  );
};
