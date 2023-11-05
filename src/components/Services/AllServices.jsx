import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const AllServices = () => {

    const services = useLoaderData();

    useEffect(
        () => {
            document.title = 'GoLocal | Services'
        }
        , [])

    return (
        <div>
            <div className="bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                <img src="../../../resources/pexels-swarup-photography-13015186.jpg" alt="" className="h-[45vh] w-full object-cover" />
                <div className="absolute h-[45vh] flex items-center left-0 top-0 bg-gradient-to-b w-full from-[#0000008d] to-[#00000067]">
                    <div className='text-white w-3/4 mx-auto absolute top-44 left-28' data-aos="fade-up" data-aos-duration='1500'>
                        <Button color="transparent" size='md' className="border mb-5" pill>Services</Button>
                        <h2 className="lg:text-7xl text-6xl">Find Your <br />Desired Service</h2>
                    </div>
                </div>
            </div>
            <div className=" w-1/2 mx-auto text-center">
                <h2 className="mt-24 text-5xl mb-4">The Most Popular Destinations in Bangladesh</h2>
                <p className="text-gray-500">Find your perfect place to spend vacation, relax and enjoy every bit of freedom with us</p>
            </div>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:w-[85vw] w-fit mx-auto mt-16">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </section>
        </div>
    );
};

export default AllServices;