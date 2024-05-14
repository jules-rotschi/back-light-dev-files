import { createRoot } from "react-dom/client";
import { Button } from "./components/Button";
import { toggleTheme } from "./utils/theme";
import { Select } from "./components/Select";
import { Snackbar } from "./components/Snackbar";
import { useState } from "react";

const root = createRoot(document.getElementById('root') as HTMLElement);

const App = () => {

  const [snack, setSnack] = useState(true);

  const closeSnack = () => {
    setSnack(false);
  }

  return (
    <div style={{padding: "50px"}}>
      <Button style="filled" color="neutral" onClick={() => toggleTheme()} label="Switch theme" />
      <Select name="select" options={[{label: "test", value: "test"}]} />
      {snack && <Snackbar type="critical" title="test" message="test" close={closeSnack}/>}
    </div>
  )
}

root.render(<App />);