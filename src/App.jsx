import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashboardRoute,
  LoginRoute,
  AdoptionRequestRoute,
  AppointmentPageRoute,
  MessagesPageRoute,
  ConversationPageRoute,
} from "./Routes/AdminRoutes/AdminRoutes";
import {
  UserLoginRoute,
  UserDashboardRoute,
  UserAdoptionRoute,
  UserRegistrationRoute,
  UserForgotPasswordRoute,
  UserBookingRoute,
  UserAdoptionFormRoute,
} from "./Routes/UserRoutes/UserRoutes";
import {
  PetRoute,
} from "./Routes/PetRoutes/PetRoutes";
const routers = createBrowserRouter([
  LoginRoute,
  PetRoute,
  DashboardRoute,
  AdoptionRequestRoute,
  AppointmentPageRoute,
  MessagesPageRoute,
  ConversationPageRoute,
  UserLoginRoute,
  UserDashboardRoute,
  UserAdoptionRoute,
  UserRegistrationRoute,
  UserForgotPasswordRoute,
  UserBookingRoute,
  UserAdoptionFormRoute,
]);

function App() {
  return <RouterProvider router={routers} />;
}
export default App;
