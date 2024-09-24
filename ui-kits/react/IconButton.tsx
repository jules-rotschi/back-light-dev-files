import { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { IconComponent } from '../../icons/react/icon-component-type';

interface IconButtonProps {
  icon: IconComponent;
  className?: string;
  onClick?: ReactEventHandler;
  type?: "button" | "submit" | "reset";
  link?: string;
  externalLink?: boolean;
  disabled?: boolean;
}


export const IconButton = (props: IconButtonProps) => {

  const customClassName = props.className ? ` ${props.className}` : "";

  if (props.link && props.externalLink) return (
    <a
      href={props.link}
      target='_blank'
      className={"icon-button" + customClassName}
    >
      <props.icon size={24}/>
    </a>
  )

  if (props.link) return (
    <Link
      to={props.link}
      className={"button" + customClassName}
    >
      <props.icon size={24}/>
    </Link>
  )

  return (
    <button
      type={props.type || 'button'}
      className={"icon-button" + customClassName}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <props.icon size={24} />
    </button>
  )
}