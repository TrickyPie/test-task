import { Dispatch, SetStateAction, createContext } from 'react';

type buttonStatusContextType = {
  buttonStatus: boolean;
  setButtonStatus: Dispatch<SetStateAction<boolean>>;
};

const buttonStatusContext = createContext<buttonStatusContextType>({
  buttonStatus: false,
  setButtonStatus: () => {},
});

export default buttonStatusContext;
