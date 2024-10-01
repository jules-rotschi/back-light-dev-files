import { ReactEventHandler } from "react";

export interface Option {
  label: string;
  value: string;
  disabled: boolean;
}

interface SelectProps {
  label: string;
  options: Option[];
  name?: string;
  id?: string;
  required?: boolean;
  defaultValue?: string;
  onChange?: ReactEventHandler;
  disabled?: boolean;
  tabIndex?: number;
  customClass?: string;
}

export const Select = (props: SelectProps) => {

  return (
    <div className={'select' + (props.customClass ? ` ${props.customClass}` : '')}>
      <select
        name={props.name}
        defaultValue={props.defaultValue || ''}
        id={props.id}
        required={props.required}
        disabled={props.disabled}
        tabIndex={props.tabIndex}
        onChange={props.onChange}
      >
        <option value="" disabled>{props.label}</option> :
        {
          props.options.map((option) => {
            return <option value={option.value} key={option.value}>{option.label}</option>
          })
        }
      </select>
    </div>
  )
}