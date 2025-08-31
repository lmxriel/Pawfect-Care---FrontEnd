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
  UserBookingRoute,
  UserBookingFormRoute,
  UserAdoptionFormRoute,
} from "./Routes/UserRoutes/UserRoutes";
import {
  PetRoute,
  UserDogPageRoute,
  UserCatPageRoute,
  UserAllPetPageRoute,
} from "./Routes/PetRoutes/PetRoutes";
const routers = createBrowserRouter([
  LoginRoute,
  PetRoute,
  DashboardRoute,
  AdoptionRequestRoute,
  UserDogPageRoute,
  UserCatPageRoute,
  UserAllPetPageRoute,
  AppointmentPageRoute,
  MessagesPageRoute,
  ConversationPageRoute,
  UserLoginRoute,
  UserDashboardRoute,
  UserAdoptionRoute,
  UserRegistrationRoute,
  UserBookingRoute,
  UserBookingFormRoute,
  UserAdoptionFormRoute,
]);

function App() {
  return <RouterProvider router={routers} />;
}
export default App;
