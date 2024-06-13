import { Link } from 'react-router-dom';

interface NavlinkProps {
  label: string;
  link: string;
  current: boolean;
  className?: string;
}

export const Navlink = (props: NavlinkProps) => {

  const currentClassName = props.current ? " navlink--current" : "";
  const customClassName = props.className ? ` ${props.className}` : "";

  return (
    <Link className={"navlink" + currentClassName + customClassName} to={props.link}>
      {props.label}
    </Link>
  )
}