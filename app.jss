import React, { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "YOUR_CLIENT_ID", // Google Client ID shu yerga yozing
        callback: handleCredentialResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("googleSignIn"),
        { theme: "outline", size: "large", shape: "pill" }
      );
    };
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    alert(lang === "en" ? "Login successful!" : "Kirish muvaffaqiyatli!");
  };

  const texts = {
    en: {
      title: "Login with Google",
      subtitle: "Hologram Style Login",
      toggle: "Switch to Uzbek"
    },
    uz: {
      title: "Google bilan kirish",
      subtitle: "Gologram uslubida login",
      toggle: "Ingliz tiliga o'tish"
    }
  };

  return (
    <div className="container">
      <div className="hologram-card">
        <h1 className="title">{texts[lang].title}</h1>
        <p className="subtitle">{texts[lang].subtitle}</p>
        <div id="googleSignIn"></div>
        <button className="toggle-btn" onClick={() => setLang(lang === "en" ? "uz" : "en")}>
          {texts[lang].toggle}
        </button>
      </div>
    </div>
  );
};

export default App;
