import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Design = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <path d="M8 16C5 13 3 3 3 3C3 3 13 5 16 8C19 11 17.5 14.5 17.5 14.5L21.1464 18.1464C21.3417 18.3417 21.3417 18.6583 21.1464 18.8536L18.8536 21.1464C18.6583 21.3417 18.3417 21.3417 18.1464 21.1464L14.5 17.5C14.5 17.5 11 19 8 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 3L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="11" cy="11" r="2" fill="currentColor"/>
    </Icon>
  )
}