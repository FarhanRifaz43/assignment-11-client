import { Button } from "flowbite-react";
import { useEffect } from "react";

const AllServices = () => {

    useEffect(
        () => {
            document.title = 'GoLocal | Services'
        }
        , [])

    return (
        <div>
            <div className="bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                <img src="../../../resources/pexels-swarup-photography-13015186.jpg" alt="" className="h-[45vh] w-full object-cover"/>
                <div className="absolute h-[45vh] flex items-center left-0 top-0 bg-gradient-to-b w-full from-[#0000008d] to-[#00000067]">
                    <div className='text-white w-3/4 mx-auto absolute top-44 left-48' data-aos="fade-up" data-aos-duration='1500'>
                        <Button color="transparent" size='md' className="border mb-5" pill>Services</Button>
                        <h2 className="text-7xl w-1/2">Find your desired service</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;