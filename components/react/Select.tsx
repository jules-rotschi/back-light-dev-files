export interface Option {
  label: string;
  value: string;
  isEnabled: boolean;
}

interface SelectProps {
  name: string;
  options: Option[];
  value?: string;
  onChange?: Function;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Select = (props: SelectProps) => {

  return (
    <select
      name={props.name}
      className="select"
      disabled={props.disabled}
      defaultValue={props.defaultValue}
      onChange={
        () => {
          if (props.onChange) props.onChange();
        }
      }
    >
      {
        (props.placeholder && !props.defaultValue) &&
          <option value="" disabled selected>{props.placeholder}</option>
      }
      {
        props.options.map((option) => {
          return (
            <option value={option.value} disabled={!option.isEnabled}>{option.label}</option>
          )
        })
      }
    </select>
  )
}