import { useEffect } from "react";
import Banner from "./Banner";
import Popular from "./popular-services/Popular";
import Values from "./value-proposition/Values";
import TourGallery from "./TourGallery";

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
            <hr className="mt-16 w-[85%] mx-auto" />
            <Values></Values>
            <hr className="mt-16 w-[85%] mx-auto" />
            <TourGallery></TourGallery>
            <hr className="mt-16 w-[85%] mx-auto" />
            
        </div>
    );
};

export default Home;