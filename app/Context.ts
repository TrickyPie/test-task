import { Dispatch, SetStateAction, createContext } from 'react';

type contextType = {
  buttonStatus: boolean;
  setButtonStatus: Dispatch<SetStateAction<boolean>>;
  chosenApplications: number[];
  setChosenApplications: Dispatch<SetStateAction<number[]>>;
};

const context = createContext<contextType>({
  buttonStatus: false,
  setButtonStatus: () => {},
  chosenApplications: [],
  setChosenApplications: () => {},
});

export default context;
