// context.js

import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myArray, setMyArray] = useState([]);

  const addToArray = (item) => {
    setMyArray((prevArray) => [...prevArray, item]);
  };

  const removeFromArray = (itemId) => {
    const updatedArray = myArray.filter((item) => item.id !== itemId);
        setMyArray(updatedArray);
  };

  return (
    <MyContext.Provider value={{ myArray,setMyArray, addToArray, removeFromArray }}>
      {children}
    </MyContext.Provider>
  );
};
