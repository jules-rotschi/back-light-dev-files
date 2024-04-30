import { PropsWithChildren, ReactEventHandler } from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: ReactEventHandler;
  style: "filled" | "outlined" | "ghost";
  color: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
  hasIcon?: boolean;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {

  const styleClassName = `button-${props.style}`;
  const colorClassName = `button-${props.color}`;
  const iconClassName = props.hasIcon ? "button-with-icon" : "";

  return (
    <button
      type={props.type || 'button'}
      className={`small-button ${styleClassName} ${colorClassName} ${iconClassName} ${(props.className || '')}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}