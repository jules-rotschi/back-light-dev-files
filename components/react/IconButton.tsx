import { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { IconComponent } from '../../icons/react/icon-component-type';

interface IconButtonProps {
  color: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
  icon: IconComponent;
  className?: string;
  onClick?: ReactEventHandler;
  type?: "button" | "submit" | "reset";
  link?: string;
  externalLink?: boolean;
  disabled?: boolean;
}


export const IconButton = (props: IconButtonProps) => {

  const colorClassName = ` button-${props.color}`;
  const customClassName = props.className ? ` ${props.className}` : "";

  if (props.link && props.externalLink) return (
    <a
      href={props.link}
      className={"icon-button" + colorClassName + customClassName}
    >
      <props.icon size={24}/>
    </a>
  )

  if (props.link) return (
    <Link
      to={props.link}
      className={"button" + colorClassName + customClassName}
    >
      <props.icon size={24}/>
    </Link>
  )

  return (
    <button
      type={props.type || 'button'}
      className={"icon-button" + colorClassName + customClassName}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <props.icon size={24} />
    </button>
  )
}