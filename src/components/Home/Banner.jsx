import { Button } from "flowbite-react";
import { BsArrowRight } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative h-screen">
                <img className="absolute top-0 left-0 w-full h-full object-cover z-0" src="https://i.ibb.co/18J3vqB/pexels-kelly-2382898.jpg" alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1">
                <div className="relative mt-12 z-2 text-white text-3xl flex lg:flex-row flex-col gap-12 lg:gap-0 items-center justify-center h-full md:w-[85vw] mx-auto font-bold p-4">
                    <div data-aos="fade-up" data-aos-duration='1500'>
                        <Button color="transparent" size='md' pill className="w-fit border mb-4">Experience</Button>
                        <h2 className="text-7xl lg:w-3/4 mb-12">Discover Bangladesh with GoLocal Tours</h2>
                        <Link to={'/services'}><Button color="light" size='xl' pill className="w-fit">Explore Tours<BsArrowRight className="ml-3"></BsArrowRight></Button></Link>
                    </div>
                    <div className="lg:w-1/2 text-gray-300" data-aos="fade-left" data-aos-duration='1500'>
                        <p className="text-base font-normal">Immerse yourself in the culture, history, and beauty of our region with our knowledgeable guides. </p>
                        <ul className="text-base font-normal mt-6">
                            <li className="flex items-center gap-2"><TiTick></TiTick>Expert Local Guides</li>
                            <li className="flex items-center gap-2"><TiTick></TiTick>Customizable Experiences</li>
                            <li className="flex items-center gap-2"><TiTick></TiTick>Authentic Encounters</li>
                            <li className="flex items-center gap-2"><TiTick></TiTick>Unforgettable Memories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;