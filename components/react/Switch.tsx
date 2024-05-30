interface SwitchProps {
  id: string;
  label: string;
}

export const Switch = (props: SwitchProps) => {
  return (
    <div className="switch">
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}