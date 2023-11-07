import { Dispatch, SetStateAction, createContext } from 'react';

type contextType = {
  buttonStatus: boolean;
  setButtonStatus: Dispatch<SetStateAction<boolean>>;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

const context = createContext<contextType>({
  buttonStatus: false,
  setButtonStatus: () => {},
  counter: 0,
  setCounter: () => {},
});

export default context;
