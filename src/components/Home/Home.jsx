import { useEffect } from "react";
import Banner from "./Banner";
import NavbarComp from "../shared/NavbarComp";

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
        </div>
    );
};

export default Home;