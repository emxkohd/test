import { ButtonState } from "@/ui-components/button/models/state.type";

import { useState } from "react";

const useButton = () => {
  const [buttonState, setButtonState] = useState<ButtonState>("default");
  return { buttonState, setButtonState };
};

export { useButton };
