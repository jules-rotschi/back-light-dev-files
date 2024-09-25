# Button

A button is an interactive component which can trigger an action or redirect to another page when clicked.

## Action button vs link button

An action button is a button that triggers an action on the page where it is. A <code>button</code> element should be used for action buttons.

A link button is a button that redirects the user to another page. A link element (<code>a</code>) should be used for link buttons.

## Props

- label: String
- style: "filled" | "outlined" | "ghost"
- color (optional, only if style == "filled"): "neutral" (d) | "primary" | "info" | "success" | "warning" | "critical"
- icon (optional): Icon
- link (optional): String
- onClick (optional, only if !link): Function
- customClass (optional): String
- id (optional): String
- disabled (optional): Boolean
- type (optional, only if !link): "button" (d) | "submit" | "reset"
- popoverTarget (optional, only if !link): String
- popoverTargetAction (optional, only if popoverTarget): "hide" | "show" | "toggle
- tabIndex (optional): Number