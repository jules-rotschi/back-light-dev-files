import { createRoot } from "react-dom/client";
import { Option, Select } from "../ui-kits/react/Select";
import { Badge } from "../ui-kits/react/Badge";
import { Code } from "../icons/react/Code";
import { Button } from "../ui-kits/react/Button";
import { RouterLinkAdapter } from "./router-link-adapter";
import { Alert } from "../icons/react/Alert";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Checkbox } from "../ui-kits/react/Checkbox";
import { ThemeDomState } from "../ts/theme";
import { IconButton } from "../ui-kits/react/IconButton";
import { Input } from "../ui-kits/react/Input";
import { NavLink } from "../ui-kits/react/Navlink";
import { RadioButton } from "../ui-kits/react/RadioButton";
import { Snackbar } from "../ui-kits/react/Snackbar";
import { Switch } from "../ui-kits/react/Switch";

const root = createRoot(document.getElementById('react') as HTMLElement);

const App = () => {

  const options: Option[] = [
    {
      label: "Option 1",
      value: "1",
      disabled: true
    },
    {
      label: "Option 2",
      value: "2",
      disabled: false
    },
    {
      label: "Option 3 qui est longue",
      value: "3",
      disabled: true
    }
  ]

  return (
    <>
    <Badge label="Design" />
    <Badge label="Code" icon={Code} customClass="test" id="test-id" />

    <Button label="Click-me" style="filled" link="/contact" routerLink={RouterLinkAdapter}/>
    <Button
      label="Secure your PC !"
      style="ghost"
      color="critical"
      icon={Alert}
      onClick={() => alert('you have been hacked...')}
      tabIndex={3}
      id="my-button"
      customClass="my-buttons"
    />

    <Checkbox label="Check-me" id="my-checkbox" />
    <Checkbox
      label="Check-me"
      id="my-checkbox-2"
      name="user-checked"
      value="this"
      required
      defaultChecked
      onChange={() => new ThemeDomState().toggleTheme()}
      tabIndex={3}
      customClass="my-checkboxes"
    />

    <IconButton icon={Code} onClick={() => alert('You\'ve been hacked by a hacker !')} type="submit" />
    <IconButton
      icon={Code}
      link="/contact"
      routerLink={RouterLinkAdapter}
      id="my-icon-button"
      customClass="my-icon-buttons"
    />

    <Input
      id="my-input-1"
      type="text"
      label="Name"
      placeholder="Enter your name"
      legend="The real one"
      size={50}
      name='name'
      required
      minLength={2}
      maxLength={50}
      pattern="[a-z]+"
      onChange={() => new ThemeDomState().toggleTheme()}
      tabIndex={3}
      customClass="vache"
    />
    <Input
      id="my-input-2"
      type="number"
      label="Age"
      placeholder="Enter your age"
      legend="The real one"
      name='age'
      initialValue={18}
      min={13}
      tabIndex={3}
      customClass="vache"
      unit="years old"
      invalid
      error="Too beautiful"
    />

    <NavLink
      label="Contacts"
      link={'/contact'}
      routerLink={RouterLinkAdapter}
      current={useLocation().pathname === '/contact'}
    />
    <NavLink
      label="Home"
      link={'/'}
      routerLink={RouterLinkAdapter}
      current={useLocation().pathname === '/'}
      id="my-navlink"
      customClass="own-navlink"
      tabIndex={3}
    />

    <RadioButton
      label="Check me"
      id="my-radio-1"
      name="field"
      value="radio-1"
    />

    <RadioButton
      label="Check me too"
      id="my-radio-2"
      customClass="radio-custom"
      name="field"
      value="radio-2"
      required
      onChange={() => new ThemeDomState().toggleTheme()}
      tabIndex={3}
    />

    <Select options={options} label="Select your size"/>
    <Select
      options={options}
      label="Select your size"
      name="size"
      id="my-select"
      required
      defaultValue="3"
      onChange={() => new ThemeDomState().toggleTheme()}
      tabIndex={3}
      customClass="my-select-class"
    />

    <Snackbar
      type="critical"
      title="Attention !"
      message="Vous allez un jour mourir"
      close={() => alert('It should close the snackbar')}
    />
    <Snackbar
      type="success"
      title="Commande validée"
      message="Vous recevrez un e-mail de confirmation"
      close={() => alert('It should close the snackbar')}
      id="my-snack"
      customClass="custom-snack"
    />

    <Switch label="Check-me" id="my-sw" disabled />
    <Switch
      label="Dark theme"
      id="my-theme-switch"
      name="theme"
      value="theme-sw"
      required
      defaultChecked
      onChange={() => new ThemeDomState().toggleTheme()}
      tabIndex={3}
      customClass="my-switches"
    />
    </>
  )
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);