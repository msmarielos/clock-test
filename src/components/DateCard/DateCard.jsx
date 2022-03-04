import style from "./DateCard.module.css";
import { useContext, useState, useEffect } from "react";
import { TimeZoneContext } from "../../context/timeZone";
import {
  createDeleteAction,
  createEditAction,
} from "../../reducers/actionCreators";
import { selectTimeZoneOptions } from "../../reducers/selectors";

export default function DateCard({ zone }) {
  const { dispatch, state } = useContext(TimeZoneContext);
  const [hours, setHours] = useState("");

  const options = selectTimeZoneOptions(state, [zone.tzCode]);

  const city = zone.tzCode.split("/")[1];

  const onClick = (event) => {
    dispatch(createDeleteAction({ id: zone.id }));
  };

  const onTimeZoneChange = (event) => {
    dispatch(createEditAction({ id: zone.id, tzCode: event.target.value }));
  };

  function updateTime() {
    let today = new Date();
    let tzDate = today
      .toLocaleString(undefined, { timeZone: zone.tzCode })
      .split(", ")[1];
    setHours(tzDate);
  }

  useEffect(() => {
    updateTime();
    let clock = setInterval(updateTime, 1000);

    return () => clearInterval(clock);
  }, [zone]);

  return (
    <div className={style.card}>
      <span className={style.text}>{city}</span>
      <span className={style.clock}>{hours}</span>
      <select value={zone.tzCode} onChange={onTimeZoneChange}>
        {options.map((timezone) => (
          <option key={timezone.tzCode} value={timezone.tzCode}>
            {timezone.label}
          </option>
        ))}
      </select>
      <button className="button" onClick={onClick}>
        Удалить
      </button>
    </div>
  );
}
