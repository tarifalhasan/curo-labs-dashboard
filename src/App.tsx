import { Route } from "wouter";
import ForgotPassword from "./components/forgot-password";
import Login from "./components/login";
import Register from "./components/register";

import EditPositionModal from "./components/edit-position";

import HomePage from "./components/home";
import Trading from "./components/trading";

export default function App() {
  return (
    <div>
      <Route path="/" component={HomePage} />
      <Route path="/trading" component={Trading} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/test" component={EditPositionModal} />
    </div>
  );
}
