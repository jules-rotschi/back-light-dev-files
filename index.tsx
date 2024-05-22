import { createRoot } from "react-dom/client";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Snackbar } from "./components/Snackbar";
import { Button } from "./components/Button";

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
    <Button style="filled" color="primary" label="Test" />
  )
}

root.render(<App />);