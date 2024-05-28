import { createRoot } from "react-dom/client";
import { Checkbox } from "./components/Checkbox";

const root = createRoot(document.getElementById('root') as HTMLElement);

const App = () => {

  return (
    <Checkbox id="check" label="Test" />
  )
}

root.render(<App />);