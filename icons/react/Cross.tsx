import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Cross = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </Icon>
  )
}