import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import LandingPage from "./pages/landingPage/LandingPage";
import RewardsPage from "./pages/rewardsPage/RewardsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import PropsAppLayout from "./layouts/propsAppLayout/PropsAppLayout";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<PropsAppLayout />}>
          <Route path="/rewards" element={<RewardsPage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
