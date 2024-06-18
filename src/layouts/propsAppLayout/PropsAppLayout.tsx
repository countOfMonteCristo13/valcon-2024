import { Outlet } from "react-router-dom";
import MenuBar from "../menuBar/MenuBar";
import "./PropsAppLayout.css";

const PropsAppLayout = () => {
  return (
    <div className="props-app-layout">
      <MenuBar />
      <Outlet />
    </div>
  );
};

export default PropsAppLayout;
