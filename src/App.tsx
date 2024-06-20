import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import LandingPage from "./pages/landingPage/LandingPage";
import RewardsPage from "./pages/rewardsPage/RewardsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import PropsAppLayout from "./layouts/propsAppLayout/PropsAppLayout";
import { light,dark } from "./styles/vars.css";
import { useState } from "react";

function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);

  return (
    <main className={toggleTheme ? light : dark}>
      <div onClick={() => setToggleTheme(!toggleTheme)}>
        toggle
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PropsAppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
