import { CardContainer, CardTitle, CardFont } from "./styles";
import { Buttons } from "../Buttons";

import imageDemo from "../../assets/images/imageDemo.png";

interface NewsCardProps {
  imgUrl?: string;
  title?: string;
  font?: string;
  newUrl?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  imgUrl,
  title,
  font,
  newUrl,
}) => {
  return (
    <CardContainer>
      <img src={imageDemo} alt="" width={319} height={183} />
      <CardTitle>
        Após enchentes no Grande Recife, Izolda Cela e José Sarto oferecem ajuda
        ao governo de Pernambuco
      </CardTitle>
      <CardFont>Fonte: g1.com.br</CardFont>
      <div>
        <Buttons
          buttonBackgroundcolor="#4663BF"
          buttonHeight="48px"
          buttonText="VER MAIS"
          buttonTextColor="#FFFFFF"
          buttonWidth="319px"
        />
      </div>
    </CardContainer>
  );
};
