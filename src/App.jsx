import React, { useEffect, useState } from "react";
import AppRouter from "../src/data/Router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { isLoggedContext } from "./contexts/isLogged";
import { auth } from "./firebase/firebase";

const App = () => {
  const [isLogged, setIsLogged] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setIsLogged(true);
      }
    });
  });

  return (
    <isLoggedContext.Provider value={{ isLogged, setIsLogged, user }}>
      <AppRouter />
      <ToastContainer />
    </isLoggedContext.Provider>
  );
};

export default App;
