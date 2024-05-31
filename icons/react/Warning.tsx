import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Warning = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <path d="M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 9.00002C12.5523 9.00002 13 9.44773 13 10L13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15L11 10C11 9.44773 11.4477 9.00002 12 9.00002Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2111 3.34166C10.9482 1.86756 13.0518 1.86756 13.7889 3.34166L22.1708 20.1056C22.8357 21.4354 21.8687 23 20.382 23H3.61803C2.13127 23 1.16428 21.4354 1.82918 20.1056L10.2111 3.34166ZM12 4.23608L3.61803 21L20.382 21L12 4.23608Z"/>
    </Icon>
  )
}