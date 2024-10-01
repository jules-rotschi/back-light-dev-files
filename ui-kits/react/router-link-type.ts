import { PropsWithChildren } from "react";

export interface RouterLinkProps extends PropsWithChildren {
  to: string;
  className?: string;
  id?: string;
  tabIndex?: number;
}

export type RouterLinkElement = ({}: RouterLinkProps) => JSX.Element;