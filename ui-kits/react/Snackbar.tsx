import { IconComponent } from "../../icons/react/icon-component-type";
import { Alert } from "../../icons/react/Alert";
import { Info } from "../../icons/react/Info";
import { Success } from "../../icons/react/Sucess";
import { Warning } from "../../icons/react/Warning";
import { Cross } from "../../icons/react/Cross";
import { IconButton } from "./IconButton";

interface SnackbarProps {
  type: "info" | "success" | "warning" | "critical";
  title: string;
  message: string;
  close: Function;
  id?: string;
  customClass?: string;
}

export const Snackbar = (props: SnackbarProps) => {

  let typeClass: string;
  let Icon: IconComponent;

  switch (props.type) {
    case "info":
      typeClass = " snackbar--info"
      Icon = Info;
      break;
    case "success":
      typeClass = " snackbar--success"
      Icon = Success;
      break;
    case "warning":
      typeClass = " snackbar--warning"
      Icon = Warning;
      break;
    case "critical":
      typeClass = " snackbar--critical"
      Icon = Alert;
      break;
  }

  return (
    <div className={"snackbar" + typeClass + (props.customClass ? ` ${props.customClass}` : '')} id={props.id}>
      <div className="snackbar__start">
        <span className="snackbar__icon"><Icon size={24}/></span>
        <div className="snackbar__content">
          <div className="snackbar__title">{props.title}</div>
          <div className="snackbar__message">{props.message}</div>
        </div>
      </div>
      <IconButton icon={Cross} onClick={() => props.close()}/>
    </div>
  )
}