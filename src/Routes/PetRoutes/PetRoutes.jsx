import PetPage from "../../Pet-Pages/Admin-Page/PetPage";
import DogPage from "../../Pet-Pages/User-Page/DogPage";
import CatPage from "../../Pet-Pages/User-Page/CatPage";
import AllPetPage from "../../Pet-Pages/User-Page/AllPetPage";
import ProtectedRoute from "../../Components/RouteGuard/ProtectionRoute";

const UserDogPageRoute = {
  path: "/dogs",
  element: <DogPage />,
};
const UserCatPageRoute = {
  path: "/cats",
  element: <CatPage />,
};
const UserAllPetPageRoute = {
  path: "/all",
  element: <AllPetPage />,
};
const PetRoute = {
  path: "/admin/pet",
  element: (
    <ProtectedRoute>
      <PetPage />
    </ProtectedRoute>
  ),
};

export { UserDogPageRoute, UserCatPageRoute, UserAllPetPageRoute, PetRoute };
