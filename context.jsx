import React, { useContext, useState } from "react";

const AppContext = React.createContext({
    state: true,
    setState: ()=>null
});
export const AppProvider = ({ children }) => {
  const [state, setState] = useState(true);
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
