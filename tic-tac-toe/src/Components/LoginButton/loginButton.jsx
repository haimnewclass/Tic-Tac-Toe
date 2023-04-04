import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <img
            src="https://gamearea.co.il/wp-content/uploads/2021/05/gamearea-web-14.png"
            alt=""
          />
        </div>
        <button
          className="btn btn-primary w-100"
          onClick={() => loginWithRedirect("http://localhost:3000")}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
