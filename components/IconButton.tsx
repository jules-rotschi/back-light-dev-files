import { PropsWithChildren, ReactEventHandler } from 'react';

interface IconButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: ReactEventHandler;
  color: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
}

export const IconButton = (props: PropsWithChildren<IconButtonProps>) => {

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