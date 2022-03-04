import { minimalTimezoneSet } from "compact-timezone-list";

export const selectTimeZoneOptions = (state, include = []) =>
  minimalTimezoneSet.filter(
    (tz) =>
      include.includes(tz.tzCode) ||
      !Boolean(state.zones.find(({ tzCode }) => tz.tzCode === tzCode))
  );
