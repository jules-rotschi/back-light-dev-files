import { RouterLinkElement } from './router-link-type';

interface NavLinkProps {
  routerLink: RouterLinkElement;
  label: string;
  link: string;
  current: boolean;
  id?: string;
  customClass?: string;
  tabIndex?: number;
}

export const NavLink = (props: NavLinkProps) => {

  const currentClassName = props.current ? ' navlink--current' : '';
  const customClassName = props.customClass ? ` ${props.customClass}` : '';

  return (
    <props.routerLink className={"navlink" + currentClassName + customClassName} to={props.link} id={props.id} tabIndex={props.tabIndex}>
      {props.label}
    </props.routerLink>
  )
}