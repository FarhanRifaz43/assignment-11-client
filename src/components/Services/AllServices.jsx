import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { TextInput } from 'flowbite-react';
import { BiSearchAlt2 } from 'react-icons/bi';

const AllServices = () => {

    const services = useLoaderData();

    const [count, setCount] = useState(services.length)
    const [hiddenFiltered, setHiddenFiltered] = useState(services.slice(0, 6))
    const [showAll, setShowAll] = useState(true)

    const handleSearchFilter = e => {
        const name = e.toUpperCase();
        const filteredServices = services.filter(service => service.serviceName.toUpperCase().includes(name))
        setHiddenFiltered(filteredServices);
        setCount(filteredServices.length)
    }

    const handleShowAll = () => {
        setHiddenFiltered(services)
        setShowAll(false)
    }

    useEffect(
        () => {
            document.title = 'GoLocal | Services'
        }
        , [])

    return (
        <div>
            <div className="bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                <img src="../../../resources/pexels-swarup-photography-13015186.jpg" alt="" className="h-[50vh] w-full object-cover" />
                <div className="absolute h-[50vh] flex items-center left-0 top-0 bg-gradient-to-b w-full from-[#0000008d] to-[#00000067]">
                    <div className='text-white w-3/4 mx-auto absolute top-44 left-28' data-aos="fade-right" data-aos-duration='1500'>
                        <Button data-aos="fade-right" data-aos-duration='1500' color="transparent" size='md' className="border mb-5" pill>Services</Button>
                        <h2 className="lg:text-7xl text-6xl">Find Your <br />Desired Service</h2>
                    </div>
                </div>
            </div>
            <div className=" w-1/2 mx-auto text-center" data-aos="fade-up" data-aos-duration='1000'>
                <h2 className="mt-16 text-5xl mb-4">The Most Popular Destinations in Bangladesh</h2>
                <p className="text-gray-500">Find your perfect place to spend vacation. Relax and enjoy every bit of freedom with us.</p>
                <div className="max-w-md mx-auto mt-7 relative">
                    <TextInput onKeyUp={() => handleSearchFilter(document.getElementById('searchBar').value)} className="flex-grow" rightIcon={BiSearchAlt2} id="searchBar" type="name" placeholder="Type the service name you want to find..." required />
                </div>
            </div>
            <h2 className="text-center mt-8 bg-gray-200 w-fit mx-auto px-4 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration='1400'><span className=" text-teal-700 font-bold text-xl">{count}</span> <span className="text-gray-600">Services Available</span></h2>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:w-[85vw] w-fit mx-auto mt-8">
                {
                    hiddenFiltered.map(service => <Service key={service._id} service={service}></Service>)
                }
            </section>
            <div>
                {showAll && <Button onClick={handleShowAll} className="mx-auto mt-14" color="success">Show All</Button>}
            </div>
        </div>
    );
};

export default AllServices;