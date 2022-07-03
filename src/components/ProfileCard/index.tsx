import {
  ProfileBackground,
  ProfileNameContainer,
  ProfileInfoContainer,
  ProfileIconColumn,
  ProfileInfoColumn,
  ProfileRole,
  ProfileOption,
  ProfileEmail,
} from "./styles";

import profileIcon from "../../assets/images/Vectorprofile.svg";
import emailIcon from "../../assets/images/Vectoremail.svg";
import configIcon from "../../assets/images/Vectorconfig.svg";
import leaveIcon from "../../assets/images/Vectorleave.svg";

interface ProfileProps {
  profilePic?: string;
  name?: string;
  role?: string;
  email?: string;
}

export const ProfileCard: React.FC<ProfileProps> = ({
  profilePic,
  name,
  role,
  email,
}) => {
  return (
    <ProfileBackground>
      <img
        src={profilePic}
        alt=""
        width={80}
        height={80}
        style={{ marginTop: "24px" }}
      />
      <ProfileInfoContainer>
        <ProfileIconColumn>
          <img
            src={profileIcon}
            alt="Profile"
            width={21}
            height={21}
            style={{ marginTop: "11px" }}
          />
          <img
            src={emailIcon}
            alt="Email"
            width={21}
            height={15}
            style={{ marginTop: "45px" }}
          />
          <img
            src={configIcon}
            alt="Config"
            width={17.8}
            height={17.8}
            style={{ marginTop: "31px" }}
          />
          <img
            src={leaveIcon}
            alt="Sair"
            width={14}
            height={18}
            style={{ marginTop: "35px" }}
          />
        </ProfileIconColumn>
        <ProfileInfoColumn>
          <ProfileNameContainer>{name}</ProfileNameContainer>
          <ProfileRole>{role}</ProfileRole>
          <ProfileEmail>{email}</ProfileEmail>
          <ProfileOption>Configurações</ProfileOption>
          <ProfileOption>Sair</ProfileOption>
        </ProfileInfoColumn>
      </ProfileInfoContainer>
    </ProfileBackground>
  );
};
