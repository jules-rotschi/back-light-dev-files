import { ReactEventHandler } from 'react';
import { IconComponent } from '../react-icons/icon-component-type';
import { Link } from 'react-router-dom';

interface ButtonProps {
  style: "filled" | "outlined" | "ghost";
  color: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
  label: string;
  icon?: IconComponent;
  onClick?: ReactEventHandler;
  link?: string;
  externalLink?: boolean
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {

  const styleClassName = ` button-${props.style}`;
  const colorClassName = ` button-${props.color}`;
  const iconClassName = props.icon ? " button-with-icon" : "";
  const customClassName = props.className ? ` ${props.className}` : "";

  if (props.link && props.externalLink) return (
    <a
      href={props.link}
      className={"button" + styleClassName + colorClassName + iconClassName + customClassName}
    >
      {props.icon !== undefined && <props.icon size={16}/>}
      {props.label}
    </a>
  )

  if (props.link) return (
    <Link
      to={props.link}
      className={"button" + styleClassName + colorClassName + iconClassName + customClassName}
    >
      {props.icon !== undefined && <props.icon size={16}/>}
      {props.label}
    </Link>
  )

  return (
    <button
      type={props.type || 'button'}
      className={"button" + styleClassName + colorClassName + iconClassName + customClassName}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon !== undefined && <props.icon size={16}/>}
      {props.label}
    </button>
  )
}