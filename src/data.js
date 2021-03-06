import Digit from "./components/AllDigits/Digit";
import SecondLevelOperation from "./components/SecondLevelOperations/SecondLevelOperation";
import MOperation from "./components/MLevelOperations/MOperation";
import SimpleLevelOperation from "./components/SimpleLevelOperations/SimpleLevelOperation";

export const arrays = {
  MLevelOperations: {
    comp: MOperation,
    arr: ["MC", "MR", "M+", "M-", "MS", "M^"],
  },
  SecondLevelOperations: {
    comp: SecondLevelOperation,
    arr: ["%", "CE", "C", "←", "1/x", "x*2", "√x", "/"]
  },
  AllDigits: {
    comp: Digit,
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, "+/-", 0, "."],  // DONE
  },
  SimpleLevelOperations: {
    comp: SimpleLevelOperation,
    arr: ["×", "-", "+", "="],
  },
};
