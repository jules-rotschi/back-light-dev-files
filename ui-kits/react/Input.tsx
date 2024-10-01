import { ReactEventHandler } from "react";

interface InputProps {
  id: string;
  type: "number" | "text"
  label: string;
  placeholder?: string;
  legend?: string;
  unit?: string;
  size?: number;
  name?: string;
  initialValue?: string | number;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  max?: number;
  min?: number;
  invalid?: boolean;
  error?: string;
  onChange?: ReactEventHandler;
  disabled?: boolean;
  tabIndex?: number;
  customClass?: string;
}

export const Input = (props: InputProps) => {

  const errorClass = props.invalid ? " input--error" : "";

  return (
    <div className={"input" + errorClass + (props.customClass ? ` ${props.customClass}` : '')}>
      <div className="label-container">
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <div className="field">
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          defaultValue={props.initialValue}
          placeholder={props.placeholder}
          disabled={props.disabled}
          size={props.size}
          required={props.required}
          maxLength={props.maxLength}
          minLength={props.minLength}
          pattern={props.pattern}
          max={props.max}
          min={props.min}
          onChange={props.onChange}
          tabIndex={props.tabIndex}
        />
        {Boolean(props.unit) && <span className="unit">{props.unit}</span>}
      </div>
      {Boolean(props.error || props.legend) && <legend>{props.error || props.legend}</legend>}
    </div>
  )
}