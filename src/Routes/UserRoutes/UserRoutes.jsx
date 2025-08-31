import UserLoginPage from "../../User-Pages/Login/UserLogin";
import UserDashboardPage from "../../User-Pages/Dashboard/UserDashboardPage";
import UserRegistrationPage from "../../User-Pages/Registration/UserRegistration";
import AdoptionPage from "../../User-Pages/Adoption/AdoptionPage";
import BookingPage from "../../User-Pages/Booking/BookingPage";
import BookingFormPage from "../../User-Pages/Booking/BookingForm";
import AdoptionFormPage from "../../User-Pages/Adoption/AdoptionForm";

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
const UserAdoptionRoute = {
  path: "/user/adoption",
  element: <AdoptionPage />,
};
const UserBookingRoute = {
  path: "/user/booking",
  element: <BookingPage />,
};
const UserBookingFormRoute = {
  path: "/user/booking-form",
  element: <BookingFormPage />,
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
  UserBookingRoute,
  UserBookingFormRoute,
  UserAdoptionFormRoute,
};
