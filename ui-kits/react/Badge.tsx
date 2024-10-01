import { IconComponent } from "../../icons/react/icon-component-type";

interface BadgeProps {
  label: string;
  icon?: IconComponent;
  id?: string;
  customClass?: string;
}

export const Badge = (props: BadgeProps) => {
  return (
    <div
      className={'badge' + (props.customClass ? ` ${props.customClass}` : '')}
      id={props.id}
    >
      {props.icon && <span className="icon"><props.icon size={16} /></span>}
      <span className="label">{props.label}</span>
    </div>
  )
}