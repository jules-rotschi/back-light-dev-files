import { ReactEventHandler } from 'react';
import { IconComponent } from '../react-icons/icon-component-type';

interface SmallButtonProps {
  style: "filled" | "outlined" | "ghost";
  color: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
  label: string;
  icon?: IconComponent;
  className?: string;
  onClick?: ReactEventHandler;
  type?: "button" | "submit" | "reset";
}

export const SmallButton = (props: SmallButtonProps) => {

  const styleClassName = ` button-${props.style}`;
  const colorClassName = ` button-${props.color}`;
  const iconClassName = props.icon ? " button-with-icon" : "";
  const customClassName = props.className ? ` ${props.className}` : "";

  return (
    <button
      type={props.type || 'button'}
      className={"small-button" + styleClassName + colorClassName + iconClassName + customClassName}
      onClick={props.onClick}
    >
      {props.icon !== undefined && <props.icon size={16}/>}
      {props.label}
    </button>
  )
}