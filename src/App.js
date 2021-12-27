import React, {useState} from "react";
import Header from "./components/Header";
import MLevelOperations from "./components/MLevelOperations";
import SecondLevelOperations from "./components/SecondLevelOperations";
import AllDigits from "./components/AllDigits";
import SimpleLevelOperations from "./components/SimpleLevelOperations";
import CurrentValue from "./components/CurrentValue";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 main-content">
            <div className="all-operations">
              <Header />
              <CurrentValue state={currentValue}/>

                <div className="col-12 m-level-operations">
                  <MLevelOperations />
                </div>
                <div className="col-12 second-level-operations">
                  <SecondLevelOperations />
                </div>
                <div className="col-12 digit-level-operations d-flex">
                  <div className="col-9">
                    <AllDigits setCurrentValue={setCurrentValue} />
                  </div>
                  <div className="col-3 simple-level-operations">
                    <SimpleLevelOperations />
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
