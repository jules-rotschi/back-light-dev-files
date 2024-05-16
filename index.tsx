import { createRoot } from "react-dom/client";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Snackbar } from "./components/Snackbar";

const root = createRoot(document.getElementById('root') as HTMLElement);

const App = () => {

  const options = [
    {
      label: "Option 1",
      value: "option1"
    },
    {
      label: "Option 2",
      value: "option2"
    },
    {
      label: "Option 3 blablbalbakjbva",
      value: "option3"
    },
  ]

  const close = () => {
    return
  }

  return (
    <div style={{padding: "50px"}}>
      <Input id="input" type="number" label="Taille" unit="cm" placeholder="Votre taille" />
      <Select name="select" options={options} />
      <Snackbar type="info" title="Snackbar" message="This is a test." close={close} />
    </div>
  )
}

root.render(<App />);