import { ReactEventHandler } from 'react';
import { IconComponent } from '../react-icons/icon-component-type';

interface IconButtonProps {
  color: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
  icon: IconComponent;
  className?: string;
  onClick?: ReactEventHandler;
  type?: "button" | "submit" | "reset";
}

export const IconButton = (props: IconButtonProps) => {

  const colorClassName = ` button-${props.color}`;
  const customClassName = props.className ? ` ${props.className}` : "";

  return (
    <button
      type={props.type || 'button'}
      className={"icon-button" + colorClassName + customClassName}
      onClick={props.onClick}
    >
      <props.icon size={24} />
    </button>
  )
}