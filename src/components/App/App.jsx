import ListTimeZone from "../ListTimeZone/ListTimeZone";
import Header from "../Header/Header";
import FormTimeZone from "../FormTimeZone/FormTimeZone";
import { TimeZoneContext } from "../../context/timeZone";
import { timeZoneReducer } from "../../reducers/timeZoneReducer";
import { useEffect, useReducer } from "react";

function App() {
  const savedState = localStorage.getItem("state");

  const initialState = savedState ? JSON.parse(savedState) : { zones: [] };

  const [state, dispatch] = useReducer(timeZoneReducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <TimeZoneContext.Provider value={{ state, dispatch }}>
      <Header />
      <FormTimeZone />
      <ListTimeZone />
    </TimeZoneContext.Provider>
  );
}

export default App;
