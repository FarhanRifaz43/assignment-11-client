import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cards = ({ service }) => {

    const { serviceArea, serviceImage, serviceName, serviceDescription, serviceProviderName, serviceProviderImage, servicePrice } = service;

    return (
        <div className='relative' data-aos="fade-right">
            <div className='h-72'>
                <img src={serviceImage} alt="" className='w-full h-full object-cover rounded-xl' />
            </div>
            <div className='px-3 absolute transition-all duration-200 opacity-0 hover:opacity-100 bottom-0 bg-gradient-to-t from-[#000000e3] to-[#00000073] w-full h-full rounded-lg'>
                <h5 className="text-2xl font-bold tracking-tight text-white mt-2 absolute top-5 left-6">
                    {serviceName}
                </h5>
                <p className="font-normal text-gray-300 absolute top-16 left-6">
                    {serviceDescription}
                </p>
                <div className="flex items-center p-2 mb-2 absolute bottom-0">
                    <div className="flex gap-2 items-center mt-12">
                        <img src={serviceProviderImage} className="w-12 h-12 object-cover rounded-full" alt="" />
                        <div className="space-y-1 text-white">
                            <h2 className="font-bold">{serviceProviderName}</h2>
                            <h2 className="text-gray-300">${servicePrice}</h2>
                        </div>
                    </div>
                </div>
                <Link><button className='border rounded-full bottom-3 right-4 absolute p-3'><AiOutlineArrowRight className='text-white text-xl'></AiOutlineArrowRight></button></Link>
            </div>
        </div>
    );
};

export default Cards;