import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Info = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <circle cx="12" cy="7" r="1" transform="rotate(180 12 7)" fill="currentColor"/>
      <path d="M12 17L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    </Icon>
  )
}