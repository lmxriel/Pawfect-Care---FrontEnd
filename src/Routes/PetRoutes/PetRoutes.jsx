import PetPage from "../../Pet-Pages/Admin-Page/PetPage";
import ProtectedRoute from "../../Components/RouteGuard/ProtectionRoute";


const PetRoute = {
  path: "/admin/pet",
  element: (
    <ProtectedRoute>
      <PetPage />
    </ProtectedRoute>
  ),
};

export { PetRoute };
