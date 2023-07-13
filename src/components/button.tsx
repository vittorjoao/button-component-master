import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "text";
  color?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  active?: boolean;
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  children,
  active,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={classNames(
        "button",
        variant ? variant : "default",
        color ? color : null,
        size ? size : "md",
        active ? "active" : null,
        disableShadow ? "disableShadow" : null,
        disabled ? "disabled" : null,
        startIcon ? "icon" : endIcon ? "icon" : null
      )}
      {...rest}
    >
      {startIcon ? (
        <span className="material-icons-sharp">{startIcon}</span>
      ) : null}
      {children}
      {endIcon ? <span className="material-icons-sharp">{endIcon}</span> : null}
    </button>
  );
};

export default Button;
