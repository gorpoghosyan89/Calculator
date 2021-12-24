import React from "react";
import Header from "./components/Header";
import MLevelOperations from "./components/MLevelOperations";
import SecondLevelOperations from "./components/SecondLevelOperations";
import AllDigits from "./components/AllDigits";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleLevelOperations from "./components/SimpleLevelOperations";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 main-content">
            <Header />
            <div className="current-value-block text-end">
              <span className="display-6 fw-light">12345</span>
            </div>

            <div className="col-12 m-level-operations">
              <MLevelOperations />
            </div>

            <div className="col-12 second-level-operations">
              <SecondLevelOperations />
            </div>

            <div className="col-12 digit-level-operations d-flex">
              <div className="col-9">
                <AllDigits />
              </div>
              <div className="col-3 simple-level-operations">
                <SimpleLevelOperations />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
