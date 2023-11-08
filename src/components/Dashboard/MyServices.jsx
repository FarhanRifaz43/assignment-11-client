import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import MyServCard from "./myServCard";

const MyServices = () => {

    const { user } = useContext(AuthContext)
    const services = useLoaderData();
    const myServices = services.filter(service => service.serviceProviderName === user.displayName)

    return (
        <div>
            <div className="relative">
                <img src="../../resources/pexels-rushow-khan-122107.jpg" className="h-[360px] w-full object-cover" alt="" />
                <div className="h-[360px] bg-gradient-to-b from-[#0000008d] to-[#00000067] absolute top-0 w-full">
                    <h2 className="text-white text-7xl mt-60 ml-28" data-aos="fade-right" data-aos-duration="1000">Manage Your Services</h2>
                </div>
                <div className="w-[75%] mx-auto space-y-4 mt-16">
                    {
                        myServices.map(serv => <MyServCard key={serv._id} serv={serv}></MyServCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyServices;