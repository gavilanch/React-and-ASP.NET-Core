import { BrowserRouter} from "react-router";
import Menu from "./features/home/components/Menu";
import AppRoutes from "./AppRoutes";

function App() {



  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
