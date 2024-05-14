interface CheckboxProps {
  id: string;
  label: string;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={props.id} />
    <label htmlFor={props.id}>{props.label}</label>
  </div>
  )
}