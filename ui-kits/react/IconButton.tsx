import { ReactEventHandler } from 'react';
import { IconComponent } from '../../icons/react/icon-component-type';
import { RouterLinkElement } from './router-link-type';

interface IconButtonProps {
  icon: IconComponent;
  link?: string;
  externalLink?: boolean;
  onClick?: ReactEventHandler;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  tabIndex?: number;
  id?: string;
  customClass?: string;
  routerLink?: RouterLinkElement;
}


export const IconButton = (props: IconButtonProps) => {

  if (props.externalLink) return (
    <a
      href={props.link}
      target='_blank'
      className={"icon-button" + (props.customClass ? ` ${props.customClass}` : "")}
      id={props.id}
      tabIndex={props.tabIndex}
    >
      <props.icon size={24}/>
    </a>
  )

  if (props.link && props.routerLink) return (
    <props.routerLink
      to={props.link}
      className={"icon-button" + (props.customClass ? ` ${props.customClass}` : "")}
      id={props.id}
      tabIndex={props.tabIndex}
    >
      <props.icon size={24} />
    </props.routerLink>
  )

  return (
    <button
      type={props.type || 'button'}
      className={"icon-button" + (props.customClass ? ` ${props.customClass}` : "")}
      id={props.id}
      onClick={props.onClick}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
    >
      <props.icon size={24} />
    </button>
  )
}