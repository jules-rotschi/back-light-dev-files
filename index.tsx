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
      value: "1"
    },
    {
      label: "Option 2",
      value: "2"
    },
    {
      label: "Option 3",
      value: "3"
    }
  ]

  return (
    <>
    <Snackbar type="info" title="Title" message="Message" close={() => {}} />
    <Snackbar type="success" title="Title" message="Message" close={() => {}} />
    <Snackbar type="warning" title="Title" message="Message" close={() => {}} />
    <Snackbar type="critical" title="Title" message="Message" close={() => {}} />

    <Button style="filled" color="neutral" label="Button" />
    <Button style="filled" color="primary" label="Button" />
    <Button style="filled" color="success" label="Button" />
    <Button style="filled" color="critical" label="Button" />
    <Button style="outlined" color="neutral" label="Button" />
    <Button style="outlined" color="primary" label="Button" />
    <Button style="outlined" color="success" label="Button" />
    <Button style="outlined" color="critical" label="Button" />
    <Button style="ghost" color="neutral" label="Button" />
    <Button style="ghost" color="primary" label="Button" />
    <Button style="ghost" color="success" label="Button" />
    <Button style="ghost" color="critical" label="Button" />

    {/* <Button style="filled" color="neutral" label="Button" link="" /> */}
    <Button style="filled" color="neutral" label="Button" link="http://julesrotschi.fr" externalLink />

    <Button style="filled" color="primary" label="Button" icon={Code} />

    <SmallButton style="filled" color="neutral" label="Small button" />
    <SmallButton style="filled" color="primary" label="Small button" />
    <SmallButton style="filled" color="success" label="Small button" />
    <SmallButton style="filled" color="critical" label="Small button" />
    <SmallButton style="outlined" color="neutral" label="Small button" />
    <SmallButton style="outlined" color="primary" label="Small button" />
    <SmallButton style="outlined" color="success" label="Small button" />
    <SmallButton style="outlined" color="critical" label="Small button" />

    {/* <SmallButton style="filled" color="neutral" label="Small button" link="" /> */}
    <SmallButton style="filled" color="neutral" label="Small button" link="http://julesrotschi.fr" externalLink />

    <SmallButton style="filled" color="primary" label="Small button" icon={Code} />

    <IconButton color="neutral" icon={Code} />
    <IconButton color="primary" icon={Code} />
    <IconButton color="success" icon={Code} />
    <IconButton color="critical" icon={Code} />

    {/* <IconButton color="neutral" icon={Code} link="/" /> */}
    <IconButton color="neutral" icon={Code} link="http://julesrotschi.fr" externalLink />

    <Checkbox id="cb" label="Checkbox" />
    <RadioButton id="radio" name="radio" label="Radio button" />
    <Switch id="sw" label="Switch"/>

    <Input id="in" type="number" label="Input" unit="un/it" placeholder="Placeholder" legend="Legend" />

    <Select name="select" options={options} />

    <Badge label="Badge" />
    <Badge label="Badge" icon={Code} />
    </>
  )
}

root.render(<App />);