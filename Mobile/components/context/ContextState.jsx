import React, { createContext, useState } from 'react';

export const MultiStateContext = createContext();

export const ContextState = ({ children }) => {
  const [touchLike, setTouchLike] = useState(false);
  const [touchComment, setTouchComment] = useState(false);

  return (
    <MultiStateContext.Provider value={{ touchLike, setTouchLike, touchComment, setTouchComment }}>
      {children}
    </MultiStateContext.Provider>
  );
};