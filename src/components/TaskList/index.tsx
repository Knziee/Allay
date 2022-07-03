import {
  TaskListBackground,
  TaskListTitle,
  TaskListDescription,
  TaskListImgButton,
} from "./styles";
import { Buttons } from "../Buttons";
import checkList from "../../assets/images/checkList.svg";

export const TaskList: React.FC = () => {
  return (
    <TaskListBackground>
      <TaskListTitle>Lista de tarefas</TaskListTitle>
      <TaskListDescription>
        Parece que você ainda não criou a sua lista de tarefas! Clique no botão
        e comece agora.
      </TaskListDescription>
      <TaskListImgButton>
        <img
          src={checkList}
          alt="checkList"
          width={150}
          height={181}
          style={{
            marginTop: "41px",
            marginBottom: "83px",
          }}
        />
        <Buttons
          buttonBackgroundcolor="#4663BF"
          buttonHeight="31px"
          buttonText="Lista de tarefas"
          buttonTextColor="#FFFFFF"
          buttonWidth="193px"
          buttonBorderColor="#4663BF"
        />
      </TaskListImgButton>
    </TaskListBackground>
  );
};
