import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { Home } from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes;
