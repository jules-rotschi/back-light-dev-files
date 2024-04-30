import { PropsWithChildren, ReactEventHandler } from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: ReactEventHandler;
  color: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {

  const colorClassName = `button-${props.color}`;

  return (
    <button
      type={props.type || 'button'}
      className={`icon-button ${colorClassName} ${(props.className || '')}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}