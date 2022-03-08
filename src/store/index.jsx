import React, {useState, createContext} from 'react';

export const mainContext  = createContext();


export const MainProvider = (props) => {
  const [routesList,setRoutesList] = useState([]);
  return (
    <mainContext.Provider value={{
      routesList,
      setRoutesList
    }}>
      {props.children}
    </mainContext.Provider>
  );
};
