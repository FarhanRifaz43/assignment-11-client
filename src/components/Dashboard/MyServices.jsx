import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import MyServCard from "./myServCard";
import Swal from "sweetalert2";

const MyServices = () => {

    const [myServices, setMyServices] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:3000/my-services?email=${user.email}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyServices(data))
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "The service will be deleted permanently.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2E7D32",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete Service"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/services/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Service has been deleted.",
                                icon: "success"
                            });
                            const remaining = myServices.filter(serv => serv._id !== id)
                            setMyServices(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="relative">
                <img src="../../resources/pexels-rushow-khan-122107.jpg" className="h-[360px] w-full object-cover" alt="" />
                <div className="h-[360px] bg-gradient-to-b from-[#0000008d] to-[#00000067] absolute top-0 w-full">
                    <h2 className="text-white text-7xl mt-60 ml-28" data-aos="fade-right" data-aos-duration="1000">Manage Your Services</h2>
                </div>
                <div className="w-[75%] mx-auto space-y-4 mt-16">
                    {
                        myServices.map(serv => <MyServCard key={serv._id} serv={serv} handleDelete={handleDelete}></MyServCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyServices;