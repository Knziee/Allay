import { Button } from "./styles";

interface ButtonProps {
  buttonBackgroundcolor?: string;
  buttonText?: string;
  buttonTextColor?: string;
  buttonHeight?: string;
  buttonWidth?: string;
  buttonBorderColor?: string;
}

export const Buttons: React.FC<ButtonProps> = ({
  buttonBackgroundcolor,
  buttonText,
  buttonTextColor,
  buttonHeight,
  buttonWidth,
  buttonBorderColor,
}) => {
  return (
    <Button
      style={{
        backgroundColor: buttonBackgroundcolor,
        color: buttonTextColor,
        height: buttonHeight,
        width: buttonWidth,
        borderColor: buttonBorderColor,
      }}
    >
      {buttonText}
    </Button>
  );
};
