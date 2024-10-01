import { ReactEventHandler } from "react";

interface CheckboxProps {
  label: string;
  id: string;
  name?: string;
  value?: string;
  required?: boolean;
  defaultChecked?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  onChange?: ReactEventHandler;
  customClass?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <div className={'checkbox' + (props.customClass ? ` ${props.customClass}` : '')}>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        defaultChecked={props.defaultChecked}
        required={props.required}
        disabled={props.disabled}
        tabIndex={props.tabIndex}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}