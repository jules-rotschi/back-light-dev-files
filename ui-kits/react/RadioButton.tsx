import { ReactEventHandler } from "react";

interface RadioButtonProps {
  label: string;
  id: string;
  name?: string;
  value?: string;
  required?: boolean;
  defaultChecked?: boolean;
  onChange?: ReactEventHandler;
  disabled?: boolean;
  tabIndex?: number;
  customClass?: string;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className={'radio-button' + (props.customClass ? ` ${props.customClass}` : '')}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        required={props.required}
        defaultChecked={props.required}
        onChange={props.onChange}
        disabled={props.disabled}
        tabIndex={props.tabIndex}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}