import { Outlet } from "react-router-dom";
import NavbarComp from "./components/shared/NavbarComp";
import FooterComp from "./components/shared/FooterComp";

const Root = () => {
    return (
        <div>
            <NavbarComp></NavbarComp>
            <Outlet></Outlet>
            <FooterComp></FooterComp>
        </div>
    );
};

export default Root;