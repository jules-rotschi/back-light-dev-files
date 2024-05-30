import { createRoot } from "react-dom/client";
import { Snackbar } from "./components/react/Snackbar";
import { Button } from "./components/react/Button";
import { Checkbox } from "./components/react/Checkbox";
import { RadioButton } from "./components/react/RadioButton";
import { Switch } from "./components/react/Switch";
import { Input } from "./components/react/Input";

const root = createRoot(document.getElementById('react') as HTMLElement);

const App = () => {

  return (
    <>
    <Snackbar type="info" title="Title" message="Message" close={() => {}} />
    <Snackbar type="success" title="Title" message="Message" close={() => {}} />
    <Snackbar type="warning" title="Title" message="Message" close={() => {}} />
    <Snackbar type="critical" title="Title" message="Message" close={() => {}} />

    <Button style="filled" color="neutral" label="Button" />

    <Checkbox id="cb" label="Checkbox" />
    <RadioButton id="radio" name="radio" label="Radio button" />
    <Switch id="sw" label="Switch"/>

    <Input id="in" type="text" label="Input" />

    
    </>
  )
}

root.render(<App />);