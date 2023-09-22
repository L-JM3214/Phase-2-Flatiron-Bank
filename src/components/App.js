import React from "react";
import AccountContainer from "./AccountContainer";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
      <div className="footer">Bank of Flatiron</div>
    </div>
  );
}

export default App;
