import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Info = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 18C11.4477 18 11 17.5523 11 17L11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11L13 17C13 17.5523 12.5523 18 12 18Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"/>
    </Icon>
  )
}