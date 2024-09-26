# Select

A select is an interactive component that corresponds to the native HTML element <code>select</code>.

## Props

- label: String
- options: Option[]
- name (optional): String
- id (optional): String
- required (optional): Boolean
- defaultValue (optional): Boolean
- onChange (optional): Function
- disabled (optional): Boolean
- tabIndex (optional): Number
- customClass (optional): String

Option {
  label: String;
  value: String;
}