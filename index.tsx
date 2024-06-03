import { createRoot } from "react-dom/client";
import { Snackbar } from "./components/react/Snackbar";
import { Button } from "./components/react/Button";
import { Checkbox } from "./components/react/Checkbox";
import { RadioButton } from "./components/react/RadioButton";
import { Switch } from "./components/react/Switch";
import { Input } from "./components/react/Input";
import { Code } from "./icons/react/Code";
import { SmallButton } from "./components/react/SmallButton";
import { IconButton } from "./components/react/IconButton";
import { Select, Option } from "./components/react/Select";
import { Badge } from "./components/react/Badge";

const root = createRoot(document.getElementById('react') as HTMLElement);

const App = () => {

  const options: Option[] = [
    {
      label: "Option 1",
      value: "1",
      isEnabled: true
    },
    {
      label: "Option 2",
      value: "2",
      isEnabled: false
    },
    {
      label: "Option 3",
      value: "3",
      isEnabled: true
    }
  ]

  return (
    <>
    <Button style="filled" color="neutral" label="Button" disabled />
    <Button style="filled" color="primary" label="Button" disabled />
    <Button style="filled" color="success" label="Button" disabled />
    <Button style="filled" color="critical" label="Button" disabled />
    <Button style="outlined" color="neutral" label="Button" disabled />
    <Button style="outlined" color="primary" label="Button" disabled />
    <Button style="outlined" color="success" label="Button" disabled />
    <Button style="outlined" color="critical" label="Button" disabled />
    <Button style="ghost" color="neutral" label="Button" disabled />
    <Button style="ghost" color="primary" label="Button" disabled />
    <Button style="ghost" color="success" label="Button" disabled />
    <Button style="ghost" color="critical" label="Button" disabled />

    <Button style="filled" color="neutral" label="Button" link="http://julesrotschi.fr" externalLink disabled />

    <Button style="filled" color="primary" label="Button" icon={Code} disabled />

    <SmallButton style="filled" color="neutral" label="Small button" disabled />
    <SmallButton style="filled" color="primary" label="Small button" disabled />
    <SmallButton style="filled" color="success" label="Small button" disabled />
    <SmallButton style="filled" color="critical" label="Small button" disabled />
    <SmallButton style="outlined" color="neutral" label="Small button" disabled />
    <SmallButton style="outlined" color="primary" label="Small button" disabled />
    <SmallButton style="outlined" color="success" label="Small button" disabled />
    <SmallButton style="outlined" color="critical" label="Small button" disabled />

    {/* <SmallButton style="filled" color="neutral" label="Small button" link="" /> */}
    <SmallButton style="filled" color="neutral" label="Small button" link="http://julesrotschi.fr" externalLink disabled />

    <SmallButton style="filled" color="primary" label="Small button" icon={Code} disabled />

    <IconButton color="neutral" icon={Code} disabled />
    <IconButton color="primary" icon={Code} disabled />
    <IconButton color="success" icon={Code} disabled />
    <IconButton color="critical" icon={Code} disabled />

    <IconButton color="neutral" icon={Code} link="http://julesrotschi.fr" externalLink disabled />

    <Checkbox id="cb" label="Checkbox" disabled />
    <RadioButton id="radio" name="radio" label="Radio button" disabled />
    <Switch id="sw" label="Switch" disabled/>

    <Input id="in" type="number" label="Input" unit="un/it" placeholder="Placeholder" legend="Legend" disabled />

    <Select name="select" options={options} />

    <Badge label="Badge" />
    <Badge label="Badge" icon={Code} />
    </>
  )
}

root.render(<App />);