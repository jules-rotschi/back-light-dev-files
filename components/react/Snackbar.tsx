import { IconComponent } from "../../icons/react/icon-component-type";
import { Alert } from "../../icons/react/Alert";
import { Check } from "../../icons/react/Check";
import { Info } from "../../icons/react/Info";
import { Warning } from "../../icons/react/Warning";
import { Cross } from "../../icons/react/Cross";

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