import { Button, Card, Label, Modal, TextInput, Datepicker } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MoreCard from "./MoreCard";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Auth/AuthProvider";


const ServiceDetail = () => {

    const { serviceArea, serviceImage, serviceName, serviceDescription, serviceProviderName, serviceProviderImage, servicePrice } = useLoaderData()
    const [services, setServices] = useState([]);
    const filteredServices = services.filter(service => service.serviceProviderName === serviceProviderName)
    const {user} = useContext(AuthContext);

    const [openModal, setOpenModal] = useState(false);
    const price = '$' + servicePrice;

    function onCloseModal() {
        setOpenModal(false);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const booking = {
            serviceArea: serviceArea,
            serviceImage: serviceImage,
            serviceName: serviceName,
            serviceProviderName: serviceProviderName,
            receiverEmail: user.email,
            servicePrice: servicePrice,
            serviceDate: document.getElementById('date').value,
            specialInstruction: document.getElementById('instruction').value
        }
        fetch('https://tour-service-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Service Booked Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setOpenModal(false);
                }
            })
    }

    useEffect(() => {
        fetch(`https://tour-service-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceProviderName])

    return (
        <div>
            <div className="bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                <img src={serviceImage} alt="" className="h-[480px] w-full object-cover" />
                <div className="absolute h-[480px] flex items-center left-0 top-0 bg-gradient-to-b w-full from-[#0000008d] to-[#00000067]">
                    <div className='text-white md:w-3/4 mx-auto absolute top-72 md:left-28 left-8' data-aos="fade-right" data-aos-duration='1500'>
                        <Button data-aos="fade-right" data-aos-duration='1500' color="transparent" size='md' className="border mb-5" pill>{serviceArea}</Button>
                        <h2 className="lg:text-7xl text-6xl">{serviceName}</h2>
                    </div>
                </div>
            </div>
            <section className="md:w-[85%] mx-auto mt-12" data-aos='fade-up' data-aos-duration='800'>
                <div className="flex items-center gap-4">
                    <h2 className="text-4xl font-bold border-l-8 border-green-600 pl-4">Service Overview</h2> <hr className="flex-grow border border-black" />
                </div>
                <section className="flex md:flex-row flex-col gap-6">
                    <div className="flex-grow">
                        <div className="bg-gray-100 grid grid-cols-2 gap-10 p-4 mt-8 w-full h-fit rounded-lg">
                            <div className="border-r-2 border-gray-300">
                                <h2 className="text-2xl font-bold mb-2">Description</h2>
                                <p className="text-gray-600">{serviceDescription}</p>
                            </div>
                            <div className="ml-3">
                                <h2 className="text-2xl font-bold mb-2">Provider</h2>
                                <div className="flex items-center gap-2">
                                    <img src={serviceProviderImage ? serviceProviderImage : '/resources/istockphoto-1341046662-612x612.jpg'} alt="" className="w-12 h-12 object-cover rounded-full" />
                                    <p className="text-gray-600">{serviceProviderName}</p>
                                </div>
                            </div>
                            <div className="border-r-2 border-gray-300">
                                <h2 className="text-2xl font-bold mb-2">Area</h2>
                                <p className="text-gray-600">{serviceArea}</p>
                            </div>
                            <div className="ml-3">
                                <h2 className="text-2xl font-bold mb-2">Price</h2>
                                <p className="text-gray-600">$ {servicePrice}</p>
                            </div>
                        </div>
                        <div className="mt-14">
                            <h2 className="text-2xl font-semibold mb-6">All Services From {serviceProviderName}</h2>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-4">
                                {
                                    filteredServices.map(e => <MoreCard key={e._id} e={e}></MoreCard>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 mt-8">
                        <Card className='w-96'>
                            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Discover the Perfect Package</h5>
                            <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="text-3xl font-semibold">$</span>
                                <span className="text-5xl font-extrabold tracking-tight">{servicePrice}</span>
                                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/person</span>
                            </div>
                            <ul className="my-7 space-y-5">
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Local Expert Guide</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Comfortable Transportation</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Trusted Accommodations</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">24/7 Customer Support</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Exclusive Access to Locations</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Entrance Fees and Permits</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Emergency Medical Assistance</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Wi-Fi Access if Available</span>
                                </li>
                            </ul>
                            <Button color="success" onClick={() => setOpenModal(true)}>Book Now</Button>
                            <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
                                <Modal.Header />
                                <Modal.Body>
                                    <form onSubmit={handleOnSubmit}>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label value="Service Name" />
                                                </div>
                                                <TextInput type="name" value={serviceName} readOnly />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label value="Service Image" />
                                                </div>
                                                <TextInput type="photoURL" value={serviceImage} readOnly />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label value="Service Provider Name" />
                                                </div>
                                                <TextInput type="name" value={serviceProviderName} readOnly />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label value="Your E-mail" />
                                                </div>
                                                <TextInput type="email" value={user.email} readOnly />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label value="Serving Date" />
                                                </div>
                                                <Datepicker id="date"></Datepicker>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label value="Special Instruction" />
                                                </div>
                                                <TextInput id="instruction" type="textBox" />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label value="Price" />
                                                </div>
                                                <TextInput type="Price" value={price} readOnly />
                                            </div>
                                        </div>
                                        <Button color="success" type="submit" className="w-full mt-8">Purchase</Button>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </Card>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ServiceDetail;