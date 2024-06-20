import { Outlet } from "react-router-dom";
import MenuBar from "../menuBar/MenuBar";
import { flex } from "../../styles/index.css";

const PropsAppLayout = () => {
  return (
    <div className={flex}>
      <MenuBar />
      <Outlet />
    </div>
  );
};

export default PropsAppLayout;
