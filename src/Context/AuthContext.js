import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthenticationContext = createContext({
  displayName: "",
  photoURL: "",
});

const AuthContext = ({ children }) => {
  const [authState, setAuthState] = useState({
    displayName: "James",
    photoURL: "/Images/Round Rectangle - S.png",
  });

  const updateState = () => {
    if (localStorage.getItem("firebaseData")) {
      const data = JSON.parse(localStorage.getItem("firebaseData"));
      if (data === authState) return;
      else setAuthState(data);
    } else {
      const data = { ...authState };
      localStorage.setItem("firebaseData", JSON.stringify(data));
    }
  };

  useEffect(() => {
    updateState();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
