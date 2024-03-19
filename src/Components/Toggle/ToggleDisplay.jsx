import ToggleContext from "./Toggle";
import { useState } from "react";

export default function Toggle({ children }) {
  const { display } = useState(ToggleContext);
  return children(display);
}
