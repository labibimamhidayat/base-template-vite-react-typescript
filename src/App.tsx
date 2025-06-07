import ReactQueryProvider from "@/lib/reactQuery";
import { RouterProviderApp } from "@/lib/router";

function App() {
  return (
    <ReactQueryProvider>
      <RouterProviderApp />
    </ReactQueryProvider>
  );
}

export default App;
