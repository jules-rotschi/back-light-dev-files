import { IconComponent } from "../react-icons/icon-component-type";
import { Cross } from "../react-icons/Cross";
import { Check } from "../react-icons/Check";
import { Info } from "../react-icons/Info";
import { Warning } from "../react-icons/Warning";
import { Alert } from "../react-icons/Alert";

interface SnackbarProps {
  type: "info" | "success" | "warning" | "critical";
  title: string;
  message: string;
  close: Function;
}

export const Snackbar = (props: SnackbarProps) => {

  let typeClassName: string;
  let Icon: IconComponent;

  switch (props.type) {
    case "info":
      typeClassName = " snackbar--info"
      Icon = Info;
      break;
    case "success":
      typeClassName = " snackbar--success"
      Icon = Check;
      break;
    case "warning":
      typeClassName = " snackbar--warning"
      Icon = Warning;
      break;
    case "critical":
      typeClassName = " snackbar--critical"
      Icon = Alert;
      break;
  }

  return (
    <div className={"snackbar" + typeClassName}>
    <div className="snackbar__start">
      <span className="snackbar__icon"><Icon size={24}/></span>
      <div className="snackbar__content">
        <div className="snackbar__title">{props.title}</div>
        <div className="snackbar__message">{props.message}</div>
      </div>
    </div>
    <button type="button" className="icon-button" onClick={() => props.close()}>
      <Cross size={24}/>
    </button>
  </div>
  )
}