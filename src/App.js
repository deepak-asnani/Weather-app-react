import { useEffect } from "react";
import AppProviders from "./providers/AppProviders";
import { store } from "./store/store";
import { setThemeInDoc } from "./helpers";

function App() {
  const theme = store((state) => state.theme);
  useEffect(() => {
    setThemeInDoc(theme);
  }, [theme]);
  return (
    <div className="h-[100vh]">
      <AppProviders />
    </div>
  );
}

export default App;
