interface CheckboxProps {
  id: string;
  label: string;
  name?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={props.id} name={props.name} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}