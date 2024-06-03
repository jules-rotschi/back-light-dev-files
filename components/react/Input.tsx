interface InputProps {
  id: string;
  type: "number" | "text"
  label: string;
  name?: string;
  placeholder?: string;
  unit?: string;
  legend?: string;
  error?: boolean;
  disabled?: boolean;
}

export const Input = (props: InputProps) => {

  const errorClassName = props.error ? " input--error" : "";

  return (
    <div className={"input" + errorClassName} aria-disabled={props.disabled}>
      <div className="label-container">
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <div className="field">
        <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} disabled={props.disabled} />
        {Boolean(props.unit) && <span className="unit">{props.unit}</span>}
      </div>
      {Boolean(props.legend) && <legend>{props.legend}</legend>}
    </div>
  )
}