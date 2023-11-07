import { Dispatch, SetStateAction, createContext } from 'react';

type buttonStatusContextType = {
  buttonStatus: boolean;
  setButtonStatus: Dispatch<SetStateAction<boolean>>;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

const buttonStatusContext = createContext<buttonStatusContextType>({
  buttonStatus: false,
  setButtonStatus: () => {},
  counter: 0,
  setCounter: () => {},
});

export default buttonStatusContext;
