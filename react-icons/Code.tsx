import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Code = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <path d="M7 7L2 12L7 17" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
      <path d="M17 7L22 12L17 17" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
      <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" stroke-linejoin="round"/>
    </Icon>
  )
}