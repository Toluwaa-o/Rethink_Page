import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useContext } from "react";
import { AuthenticationContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const { setAuthState } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.displayName);
        setAuthState({
          displayName: user.displayName.split(" ")[0],
          photoURL: user.photoURL,
        });
      })
      .then(() => navigate("/rethink"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-4 grid grid-flow-row font-raleway text-lg text-center font-bold tracking-wide gap-4 max-w-[100vw] h-[100vh] place-content-center">
      <span className="mb-4">
        <h1 className="font-morangaSubsitute text-[#4D4959] text-4xl tracking-wider font-semibold mb-4">
          Welcome to the ReThink Webpage!
        </h1>
        <p className="text-[#77737F] tracking-normal">
          Created by Toluwalashe Ogunleye
        </p>
      </span>
      <Link
        to="/rethink"
        className="border bg-[#754DE8] text-white  rounded-3xl hover:bg-white hover:text-[#754DE8] hover:border-[#754DE8] transition-all w-[50vw] py-2 m-auto md:w-[17vw]"
      >
        Sign In
      </Link>
      <button
        className="flex items-center gap-2 border border-blue-400 w-fit rounded-md m-auto "
        onClick={handleGoogle}
      >
        <span className="p-2 grid place-content-center">
          <img
            src="/Images/google_icon.png"
            alt="google"
            className="w-[25px] bg-white m-auto"
          />
        </span>
        <p className="bg-blue-400 py-2 px-4 text-white">Sign in with Google</p>
      </button>
    </div>
  );
}
