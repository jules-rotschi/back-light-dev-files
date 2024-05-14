import { PropsWithChildren } from "react";
import { IconProps } from "./icon-props";

export const Icon = (props: PropsWithChildren<IconProps>) => {

  const size = props.size || 24;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {props.children}
    </svg>
  )
}