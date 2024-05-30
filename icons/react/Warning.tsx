import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Warning = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <circle cx="12" cy="18" r="1" fill="currentColor"/>
      <path d="M12 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20.382 22H3.61803C2.87465 22 2.39116 21.2177 2.72361 20.5528L11.1056 3.78885C11.4741 3.05181 12.5259 3.05181 12.8944 3.78886L21.2764 20.5528C21.6088 21.2177 21.1253 22 20.382 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  )
}