# Input

An input is an interactive component that corresponds to the native HTML elements <code>input[type="text"]</code> and <code>input[type="number"]</code>.

## Props

- id: String
- type: "text" | "number"
- label: String
- placeholder (optional): String
- legend (optional): String
- unit (optional, only if type == "number"): String
- size (optional): Number
- name (optional): String
- initialValue (optional): String (if type == "text") | Number (if type == "number")
- required (optional): Boolean
- maxLength (optional, only if type == "text"): Number
- minLength (optional, only if type == "text"): Number
- pattern (optional, only if type == "text"): Regex
- max (optional, only if type == "number"): Number
- min (optional, only if type == "number"): Number
- invalid (optional): Boolean
- error (optional, only if !valid): String
- onChange (optional): Function
- disabled (optional): Boolean
- tabIndex (optional): Number
- customClass (optional): String