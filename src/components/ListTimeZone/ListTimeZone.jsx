import DateCard from "../DateCard/DateCard";
import { useContext } from "react";
import { TimeZoneContext } from "../../context/timeZone";
import style from "./ListTimeZone.module.css";

export default function ListTimeZone() {
  const { state } = useContext(TimeZoneContext);

  return (
    <ul className={style.container}>
      {state.zones.length > 0
        ? state.zones.map((zone) => (
            <li key={zone.tzCode}>
              <DateCard key={zone.tzCode} zone={zone} />
            </li>
          ))
        : "Нет часовых поясов"}
    </ul>
  );
}
