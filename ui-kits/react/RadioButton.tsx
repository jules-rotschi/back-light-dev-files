interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  disabled?: boolean;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="radio-button">
      <input type="radio" id={props.id} name={props.name} disabled={props.disabled} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}