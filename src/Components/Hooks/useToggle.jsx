import { useReducer } from "react";

export function useToggle() {
  const [deletePopup, dispatch] = useReducer(reducer, {
    id: "",
    open: false,
  });

  function reducer(prevState, action) {
    const { type, payload } = action;
    switch (type) {
      case "id":
        return {
          ...prevState,
          id: payload, // Correctly update the id property
        };
      case "toggle":
        return {
          ...prevState,
          open: !prevState.open,
        };
      default:
        return prevState;
    }
  }
  function togglePopup() {
    dispatch({ type: "toggle" });
  }

  function setId(id) {
    dispatch({ type: "id", payload: id });
  }

  return { deletePopup, togglePopup, setId };
}
