import { LogoStyle } from "./styles";

interface LogoProps {
  logoColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ logoColor }) => {
  return <LogoStyle style={{ color: logoColor }}>Allay</LogoStyle>;
};
