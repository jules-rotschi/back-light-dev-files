import { createRoot } from "react-dom/client";
import { Snackbar } from "./components/Snackbar";
import { Select } from "./components/Select";
import { Button } from "./components/Button";
import { SmallButton } from "./components/SmallButton";

const root = createRoot(document.getElementById('root') as HTMLElement);

const App = () => {

  const options = [
    {
      label: "Option 1",
      value: "1"
    },
    {
      label: "Option 2",
      value: "2"
    }
  ]

  return (
    <>
    <SmallButton style="outlined" color="success" label="Test" />
    </>
  )
}

root.render(<App />);