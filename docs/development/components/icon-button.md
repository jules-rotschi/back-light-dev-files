# Icon button

An icon-button is a button without label, but only an icon.

## Action button vs link button

An action button is a button that triggers an action on the page where it is. A <code>button</code> element should be used for action buttons.

A link button is a button that redirects the user to another page. A link element (<code>a</code>) should be used for link buttons.

## Props

- icon: Icon
- link (optional): String
- onClick (optional, only if !link): Function
- disabled (optional, only if !link): Boolean
- type (optional, only if !link): "button" (d) | "submit" | "reset"
- popoverTarget (optional, only if !link): String
- popoverTargetAction (optional, only if popoverTarget): "hide" | "show" | "toggle
- tabIndex (optional): Number
- id (optional): String
- customClass (optional): String