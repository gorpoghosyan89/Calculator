import React from "react";
import Header from "./components/Header/Header";
import MLevelOperations from "./components/MLevelOperations/MLevelOperations";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 main-content">
            <div className="text-center fw-bold">
              <Header />
            </div>
            <div className="current-value-block text-end">
              <span className="display-6 fw-light">12345</span>
            </div>
              <MLevelOperations/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
