import { createRoot } from "react-dom/client";
import { Input } from "./components/react/Input";
import { Code } from "./icons/react/Code";
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
      label: "Option 3 qui est longue",
      value: "3",
      isEnabled: true
    }
  ]

  return (
    <>

    <div id="flex">
    <Input id="in" type="number" label="Input" unit="un/it" placeholder="Placeholder" />
    <Select name="select" options={options}  placeholder="Test" />
    <Select name="select" options={options} />
    </div>


    <Badge label="Badge" />
    <Badge label="Badge" icon={Code} />

    </>
  )
}

root.render(<App />);