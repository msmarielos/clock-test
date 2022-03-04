import { useRef } from "react";
import { useContext } from "react";
import { TimeZoneContext } from "../../context/timeZone";
import style from "./FormTimeZone.module.css";
import { createAddAction } from "../../reducers/actionCreators";
import { selectTimeZoneOptions } from "../../reducers/selectors";

export default function FormTimeZone() {
  const { dispatch, state } = useContext(TimeZoneContext);
  const timeZoneSelect = useRef();

  const options = selectTimeZoneOptions(state);

  const addTime = (event) => {
    event.preventDefault();
    dispatch(createAddAction({ tzCode: timeZoneSelect.current.value }));
  };

  return (
    <form className={style.container} onSubmit={addTime}>
      <label className={style.label_text}>Выберите часовой пояс</label>
      <select ref={timeZoneSelect}>
        {options.map((timezone) => (
          <option key={timezone.tzCode} value={timezone.tzCode}>
            {timezone.label}
          </option>
        ))}
      </select>
      <button type="submit" className="button">
        Добавить часовой пояс
      </button>
    </form>
  );
}
