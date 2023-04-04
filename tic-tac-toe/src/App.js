import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { LoginButton } from "./Components/LoginButton/loginButton";
import { TicTacToe } from "./Components/TicTacToe/ticTacToe";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading) {
    return (
      <div className="App">
        {isAuthenticated ? <TicTacToe /> : <LoginButton />}
      </div>
    );
  } else {
    return <h1>loading init auth</h1>;
  }
}

export default App;
