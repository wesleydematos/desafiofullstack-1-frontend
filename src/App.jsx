import { ToastContainer } from "react-toastify";
import { CustomerProvider } from "./contexts/customerContext";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <CustomerProvider>
        <Routes />
      </CustomerProvider>
    </>
  );
}

export default App;
