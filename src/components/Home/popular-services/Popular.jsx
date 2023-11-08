import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Popular = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://tour-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(6, 10)))
    }, [])

    return (
        <div className="flex flex-col lg:flex-row-reverse mt-16 items-center gap-8 md:w-[85%] mx-auto">
            <section className="lg:w-1/2">
                <div data-aos="fade-up" data-aos-duration='1000' className="flex flex-col items-center lg:items-end">
                    <h2 className="text-6xl mb-12 text-center lg:text-right">Embrace the Hype: Our Popular Tours Await</h2>
                    <Link to={'/services'}><Button color="light" size='xl' pill className="w-fit">Explore Tours<BsArrowRight className="ml-3"></BsArrowRight></Button></Link>
                </div>
            </section>
            <section className="grid lg:grid-cols-2 md:w-1/2 lg:w-3/4 gap-4">
                {
                    services.map(service => <Cards key={service._id} service={service}></Cards>)
                }
            </section>
        </div>
    );
};

export default Popular;