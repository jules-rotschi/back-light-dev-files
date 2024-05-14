import { Icon } from "./Icon";
import { IconProps } from "./icon-props";

export const Alert = (props: IconProps) => {

  return (
    <Icon size={props.size}>
      <path d="M15.5858 2H8.41421C8.149 2 7.89464 2.10536 7.70711 2.29289L2.29289 7.70711C2.10536 7.89464 2 8.149 2 8.41421V15.5858C2 15.851 2.10536 16.1054 2.29289 16.2929L7.70711 21.7071C7.89464 21.8946 8.149 22 8.41421 22H15.5858C15.851 22 16.1054 21.8946 16.2929 21.7071L21.7071 16.2929C21.8946 16.1054 22 15.851 22 15.5858V8.41421C22 8.149 21.8946 7.89464 21.7071 7.70711L16.2929 2.29289C16.1054 2.10536 15.851 2 15.5858 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  )
}