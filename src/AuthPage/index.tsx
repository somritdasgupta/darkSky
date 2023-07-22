import { CSSProperties, useState } from "react";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import valley from "../assets/valley.jpeg";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(false);

  const backgroundImage = {
    backgroundImage: `url(${valley})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Take the full height of the screen
  } as CSSProperties;

  const formContainerStyle = {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto", // Center the form horizontally
    padding: "20px",
    boxSizing: "border-box",
    background: "rgba(0, 0, 0, 0.8)", // Add a semi-transparent background to the form
    borderRadius: "8px",
    marginTop: "20vh", // Center the form vertically
  } as CSSProperties;

  const titleStyle = {
    fontSize: "32px",
    fontFamily: "VisbyRoundCF-Heavy",
    letterSpacing: "1px",
    color: "white",
    textAlign: "center",
    marginBottom: "20px",
  } as CSSProperties;

  return (
    <div className="background-image" style={backgroundImage}>
      <div className="background-gradient-dark">
        <div style={formContainerStyle}>
          <div style={titleStyle}>darkSky</div>

          {hasAccount ? (
            <LogInForm onHasNoAccount={() => setHasAccount(false)} />
          ) : (
            <SignUpForm onHasAccount={() => setHasAccount(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
