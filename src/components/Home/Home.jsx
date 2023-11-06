import { useEffect } from "react";
import Banner from "./Banner";
import Popular from "./popular-services/Popular";

const Home = () => {

    useEffect(
        () => {
            document.title = 'GoLocal | Home'
        }
    , [])

    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
        </div>
    );
};

export default Home;