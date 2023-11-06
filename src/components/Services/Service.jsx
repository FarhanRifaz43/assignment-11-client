import { Button } from "flowbite-react";

const Service = ({ service }) => {

    const { serviceArea, serviceImage, serviceName, serviceDescription, serviceProviderName, serviceProviderImage, servicePrice } = service;

    return (
        <div className="rounded-2xl shadow-2xl relative w-96 h-60" data-aos="fade-up">
            <img src={serviceImage} alt="" className="h-60 w-96 rounded-2xl" />
            <section className="bg-gradient-to-b w-96 from-[#0000008d] to-[#00000067] absolute top-0 h-60 rounded-2xl">
                <div className="text-white">
                    <h2 className="px-2 mt-6 font-bold text-2xl text-center">{serviceName}</h2>
                    <p className="h-10 mt-4 px-2 text-center text-gray-300">{serviceDescription}</p>
                </div>
                <div className="flex justify-between items-center p-2 mb-2">
                    <div className="flex gap-2 items-center mt-12">
                        <img src={serviceProviderImage} className="w-12 h-12 object-cover rounded-full" alt="" />
                        <div className="space-y-1 w-36 text-white">
                            <h2 className="font-bold">{serviceProviderName}</h2>
                            <h2 className="text-gray-300">${servicePrice}</h2>
                        </div>
                    </div>
                    <Button color="gray" className="mt-14 mr-3">View Details</Button>
                </div>
            </section>
        </div>
    );
};

export default Service;