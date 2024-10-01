import { Link } from "react-router-dom";
import { RouterLinkElement } from "../ui-kits/react/router-link-type";

export const RouterLinkAdapter: RouterLinkElement = (props) => {
  return <Link to={props.to} className={props.className} id={props.id} tabIndex={props.tabIndex}>{props.children}</Link>
}