interface SwitchProps {
  id: string;
  label: string;
  disabled?: boolean;
}

export const Switch = (props: SwitchProps) => {
  return (
    <div className="switch">
      <input type="checkbox" id={props.id} disabled={props.disabled} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}