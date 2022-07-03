import { ThemeBackground, ThemeText } from "./styles";

interface ThemeProps {
  ThemeName?: string;
}

export const BodyTheme: React.FC<ThemeProps> = ({ ThemeName }) => {
  return (
    <ThemeBackground>
      <ThemeText>{ThemeName}</ThemeText>
    </ThemeBackground>
  );
};
