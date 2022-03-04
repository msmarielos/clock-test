export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

export const createAddAction = ({ tzCode }) => {
  return {
    type: ADD,
    payload: { id: Date.now(), tzCode },
  };
};

export const createDeleteAction = ({ id }) => {
  return {
    type: DELETE,
    payload: { id },
  };
};

export const createEditAction = ({ id, tzCode }) => {
  return {
    type: EDIT,
    payload: { id, tzCode },
  };
};
