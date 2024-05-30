import { IconComponent } from "../../react-icons/icon-component-type";

interface BadgeProps {
  label: string;
  icon?: IconComponent;
}

export const Badge = (props: BadgeProps) => {
  return (
    <div className="badge">
      {props.icon !== undefined && <span className="icon"><props.icon size={16} /></span>}
      <span className="label">{props.label}</span>
    </div>
  )
}