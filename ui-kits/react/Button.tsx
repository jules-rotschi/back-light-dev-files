import { ReactEventHandler } from 'react';
import { IconComponent } from '../../icons/react/icon-component-type';
import { RouterLinkElement } from './router-link-type';

interface ButtonProps {
  label: string;
  small?: boolean;
  style: "filled" | "outlined" | "ghost";
  color?: "neutral" | "primary" | "info" | "success" | "warning" | "critical";
  icon?: IconComponent;
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

export const Button = (props: ButtonProps) => {

  const sizeClass = props.small ? 'small-button' : 'button';
  const styleClass = ` button-${props.style}`;
  const colorClass = props.color ? ` button-${props.color}` : '';
  const customClass = props.customClass ? ` ${props.customClass}` : '';
  const className = sizeClass + styleClass + colorClass + customClass;

  if (props.externalLink) return (
    <a
      href={props.link}
      target='_blank'
      className={className}
      id={props.id}
      tabIndex={props.tabIndex}
    >
      {props.icon && <span className='icon'><props.icon size={16}/></span>}
      <span className='label'>{props.label}</span>
    </a>
  )

  if (props.link && props.routerLink) return (
    <props.routerLink
      to={props.link}
      className={className}
      id={props.id}
      tabIndex={props.tabIndex}
    >
      {props.icon ? <span className='icon'><props.icon size={16}/></span> : <></>}
      <span className='label'>{props.label}</span>
    </props.routerLink>
  )

  return (
    <button
      type={props.type || 'button'}
      className={className}
      id={props.id}
      onClick={props.onClick}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
    >
      {props.icon && <span className='icon'><props.icon size={16}/></span>}
      <span className='label'>{props.label}</span>
    </button>
  )
}