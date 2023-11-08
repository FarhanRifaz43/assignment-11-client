import { useEffect, useState } from "react";
import ValueCard from "./ValueCard";
import { Carousel } from "flowbite-react";

const Values = () => {

    const [values, setValues] = useState([])

    useEffect(() => {
        fetch('uvp.json')
            .then(res => res.json())
            .then(data => setValues(data))
    }, [])

    return (
        <div className="py-12 w-[85%] mx-auto">
            <h2 className="text-5xl text-center mt-6 mb-16" data-aos="fade-up" data-aos-duration='1000'>Why Choose Us?</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    values.map(value => <ValueCard key={value.title} value={value}></ValueCard>)
                }
            </div>
        </div>
    );
};

export default Values;