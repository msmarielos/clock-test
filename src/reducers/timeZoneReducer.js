import { ADD, DELETE, EDIT } from "./actionCreators";

export const timeZoneReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        zones: [...state.zones, action.payload],
      };
    case DELETE:
      return {
        ...state,
        zones: state.zones.filter(({ id }) => id !== action.payload.id),
      };
    case EDIT:
      return {
        ...state,
        zones: state.zones.map((zone) => {
          if (zone.id === action.payload.id) {
            return {
              id: zone.id,
              tzCode: action.payload.tzCode,
            };
          }

          return zone;
        }),
      };

    default:
      return state;
  }
};
