import UserLoginPage from "../../User-Pages/Login/UserLogin";
import UserDashboardPage from "../../User-Pages/Dashboard/UserDashboardPage";
import UserRegistrationPage from "../../User-Pages/Registration/UserRegistration";
import AdoptionPage from "../../User-Pages/Adoption/AdoptionPage";
import BookingPage from "../../User-Pages/Booking/BookingPage";
import AdoptionFormPage from "../../User-Pages/Adoption/AdoptionForm";
import ForgotPasswordPage from "../../User-Pages/ForgotPassword/ForgotPassword";
const UserDashboardRoute = {
  path: "/user/dashboard",
  element: <UserDashboardPage />,
};
const UserLoginRoute = {
  path: "/user/login",
  element: <UserLoginPage />,
};
const UserRegistrationRoute = {
  path: "/user/registration",
  element: <UserRegistrationPage />,
};
const UserForgotPasswordRoute = {
  path: "/user/forgot-password",
  element: <ForgotPasswordPage />,
};
const UserAdoptionRoute = {
  path: "/user/adoption",
  element: <AdoptionPage />,
};
const UserBookingRoute = {
  path: "/user/booking",
  element: <BookingPage />,
};
const UserAdoptionFormRoute = {
  path: "/user/adoption-form",
  element: <AdoptionFormPage />,
};

export {
  UserLoginRoute,
  UserDashboardRoute,
  UserAdoptionRoute,
  UserRegistrationRoute,
  UserForgotPasswordRoute,
  UserBookingRoute,
  UserAdoptionFormRoute,
};
