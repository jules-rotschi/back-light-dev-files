import { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { IconComponent } from '../../icons/react/icon-component-type';

interface SmallButtonProps {
  style: "filled" | "outlined" | "ghost";
  label: string;
  color?: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
  icon?: IconComponent;
  onClick?: ReactEventHandler;
  link?: string;
  externalLink?: boolean
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const SmallButton = (props: SmallButtonProps) => {

  const styleClassName = ` button-${props.style}`;
  const colorClassName = props.color ? ` button-${props.color}` : "";
  const iconClassName = props.icon ? " button-with-icon" : "";
  const customClassName = props.className ? ` ${props.className}` : "";

  if (props.link && props.externalLink) return (
    <a
      href={props.link}
      target='_blank'
      className={"small-button" + styleClassName + colorClassName + iconClassName + customClassName}
    >
      {props.icon !== undefined && <props.icon size={16}/>}
      {props.label}
    </a>
  )

  if (props.link) return (
    <Link
      to={props.link}
      className={"small-button" + styleClassName + colorClassName + iconClassName + customClassName}
    >
      {props.icon !== undefined && <props.icon size={16}/>}
      {props.label}
    </Link>
  )

  return (
    <button
      type={props.type || 'button'}
      className={"small-button" + styleClassName + colorClassName + iconClassName + customClassName}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon !== undefined && <props.icon size={16}/>}
      {props.label}
    </button>
  )
}