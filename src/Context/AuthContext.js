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

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
