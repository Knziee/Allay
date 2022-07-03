import { CardContainer, CardTitle, CardFont } from "./styles";
import { Buttons } from "../Buttons";

import imageDemo from "../../assets/images/imageDemo.png";
import { Link } from "react-router-dom";

interface NewsCardProps {
  imgUrl?: string;
  title?: string;
  font?: string;
  url?: string;
}

// export const NewsCard: React.FC<NewsCardProps> = ({
//   imgUrl,
//   title,
//   font,
//   url,
// }) => {

function NewsCard(props: NewsCardProps) {
  return (
    <CardContainer>
      <img src={props.imgUrl} alt="" width={319} height={183} />
      <CardTitle>{props.title}</CardTitle>
      <CardFont>Fonte: {props.font}</CardFont>
      <a href={props.url}>
        <Buttons
          buttonBackgroundcolor="#4663BF"
          buttonHeight="48px"
          buttonText="VER MAIS"
          buttonTextColor="#FFFFFF"
          buttonWidth="319px"
          buttonBorderColor="#4663BF"
        />
      </a>
    </CardContainer>
  );
}

export default NewsCard;
