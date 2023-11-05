import { useEffect } from "react";
import Banner from "./Banner";
import NavbarComp from "../shared/NavbarComp";
import FooterComp from "../shared/FooterComp";

const Home = () => {

    useEffect(
        () => {
            document.title = 'GoLocal | Home'
        }
    , [])

    return (
        <div>
            <NavbarComp></NavbarComp>
            <Banner></Banner>
            <FooterComp></FooterComp>
        </div>
    );
};

export default Home;