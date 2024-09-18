"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface ScollControlPageContext {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const ScollControlPageContext = createContext<ScollControlPageContext | null>(
  null,
);

const useScrollControlPageContext = () => {
  const context = useContext(ScollControlPageContext);

  if (!context) {
    throw new Error(
      "useScrollControlPageContext has to be used within <ScrollControlPageContext.Provider>",
    );
  }

  return context;
};

const ScrollControlPageProvider = ({
  basePageNumber,
  children,
}: {
  basePageNumber: number;
  children: ReactNode;
}) => {
  const [pageNumber, setPageNumber] = useState<number>(basePageNumber);

  return (
    <ScollControlPageContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </ScollControlPageContext.Provider>
  );
};

export { useScrollControlPageContext, ScrollControlPageProvider };
