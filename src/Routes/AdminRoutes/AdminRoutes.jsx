import LoginPage from "../../Pages/Login/Login";
import DashboardPage from "../../Pages/Dashboard/DashboardPage";
import AdoptionRequestPage from "../../Pages/Adoption/AdoptionRequest";
import AppointmentPage from "../../Pages/Appointment/AppointmentPage";
import MessagesPage from "../../Pages/MessagePage/MessagesPage";
import ConversationPage from "../../Pages/MessagePage/ConversationPage";
import ProtectedRoute from "../../Components/RouteGuard/ProtectionRoute";

const LoginRoute = {
  path: "/admin/login",
  element: <LoginPage />,
};

const DashboardRoute = {
  path: "/admin/dashboard",
  element: (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
};

const AdoptionRequestRoute = {
  path: "/admin/adoption",
  element: (
    <ProtectedRoute>
      <AdoptionRequestPage />
    </ProtectedRoute>
  ),
};

const AppointmentPageRoute = {
  path: "/admin/appointment",
  element: (
    <ProtectedRoute>
      <AppointmentPage />
    </ProtectedRoute>
  ),
};

const MessagesPageRoute = {
  path: "/admin/message",
  element: (
    <ProtectedRoute>
      <MessagesPage />
    </ProtectedRoute>
  ),
};

const ConversationPageRoute = {
  path: "/admin/conversation",
  element: (
    <ProtectedRoute>
      <ConversationPage />
    </ProtectedRoute>
  ),
};

export {
  LoginRoute,
  DashboardRoute,
  AdoptionRequestRoute,
  AppointmentPageRoute,
  MessagesPageRoute,
  ConversationPageRoute,
};
