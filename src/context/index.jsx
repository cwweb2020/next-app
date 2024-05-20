"use client";

import useFetchData from "@/hooks/useFetchData ";
// context/MyContext.js

import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  // const [state, setState] = useState("default value");

  //  hook axios
  const { data, loading } = useFetchData("https://fakestoreapi.com/products");

  useEffect(() => {}, []);

  return (
    <MyContext.Provider value={{ data, loading }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
