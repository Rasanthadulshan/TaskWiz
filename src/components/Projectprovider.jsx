import { createContext, useState } from "react";

export const Projectcontext = createContext();

export const Projectprovider = ({ children }) => {
  const [projectdata, setprojectdata] = useState();
  const [taskdata, settaskdata] = useState([]);

  const handleprojectdata = (newdata) => {
    setprojectdata(newdata);
  };

  const handletaskdata = (newtasks) => {
    settaskdata((pretasks) => {
      return [...pretasks, newtasks];
    });
  };

  return (
    <Projectcontext.Provider
      value={{ projectdata, handleprojectdata, taskdata, handletaskdata }}
    >
      {children}
    </Projectcontext.Provider>
  );
};
