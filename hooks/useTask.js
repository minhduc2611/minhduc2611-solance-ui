import { PROGRAM_ID, SOLANA_HOST } from "../utils/const";
import SolanceCoreProgram from "solance_core";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAuthenticationContext } from "../context/AuthenticationContextProvider";

const useAccount = () => {
  const wallet = useAuthenticationContext();
  const solanceProgram = React.useRef(
    new SolanceCoreProgram(wallet, SOLANA_HOST, PROGRAM_ID)
  ).current;

  const getAllTasks = async () => {
    let tasks = await solanceProgram.program.account.task.all();
    console.log("tasks", tasks);

    return tasks;
  };
  const getTaskById = async () => {};
  const createTask = async () => {
     await solance.createTask({id: "x12d2r3",name: "MOCK TASK 1"}, true);
  };
  return { getAllTasks, getTaskById, createTask };
};

export default useAccount;
