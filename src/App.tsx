import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import LandingPage from "./pages/landingPage/LandingPage";
import RewardsPage from "./pages/rewardsPage/RewardsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import PropsAppLayout from "./layouts/propsAppLayout/PropsAppLayout";
import { light,dark} from "./styles/vars.css";

function App() {
  const [theme, setTheme] = useState<boolean>(true);

  const handleToggleTheme = () => {
    setTheme(!theme);
  }

  return (
    <main className={theme ? light : dark}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PropsAppLayout />}>
          <Route path="/" element={<LandingPage theme={theme} toggleTheme={handleToggleTheme}/>} />
          <Route path="/rewards" element={<RewardsPage theme={theme} toggleTheme={handleToggleTheme} />}/>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
