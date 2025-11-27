"use client";

import { IButton } from "@/ui-components/button/models/button.type";

const Button = ({
  variant = "primary",
  onClick = () => null,
  children = null,
}: IButton) => {
  return (
    <button data-variant={variant} className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
