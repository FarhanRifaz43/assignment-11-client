import { Button, Card, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";

const MyServCard = ({ serv, handleDelete }) => {

    const { serviceImage, serviceArea, serviceDescription, serviceName, servicePrice, _id } = serv;

    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(AuthContext);

    const onCloseModal = () => {
        setOpenModal(false);
    }

    const handleUpdateService = (id) => {
        const newServiceImage = (document.getElementById('photoSer').value ? document.getElementById('photoSer').value : serviceImage);
        const newServiceName = (document.getElementById('nameSer').value ? document.getElementById('nameSer').value : serviceName);
        const newServiceDescription = (document.getElementById('descSer').value ? document.getElementById('descSer').value : serviceDescription);
        const newServiceProviderName = user.displayName;
        const newServiceArea = (document.getElementById('areaSer').value ? document.getElementById('areaSer').value : serviceArea);
        const newServicePrice = (document.getElementById('priceSer').value ? document.getElementById('priceSer').value : servicePrice);

        const updatedService = { newServiceImage, newServiceArea, newServiceDescription, newServiceName, newServicePrice, newServiceProviderName }

        fetch(`http://localhost:3000/services/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Service updated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setOpenModal(false)
                }
            })
    }

    return (
        <div className="flex justify-between items-center border p-4 rounded-xl">
            <Card className="max-w-sm shadow-none border-none" imgSrc={serviceImage} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {serviceName}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {serviceDescription}
                </p>
                <p className="font-bold text-lg text-gray-700 dark:text-gray-400">
                    ${servicePrice}/person
                </p>
            </Card>
            <section>
                <Button onClick={() => setOpenModal(true)} className="w-40 mb-4" color="success">Update Service</Button>
                <Button onClick={() => handleDelete(_id)} className="w-40 mb-4" color="warning">Delete Service</Button>
                <Link to={`/services/${_id}`}><Button className="w-40">View Details</Button></Link>


                <Modal show={openModal} size="3xl" onClose={onCloseModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <h2 className="text-center font-bold mb-6 text-2xl">Update {serviceName}</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <Label value="Service photoURL"></Label>
                                <TextInput
                                    id="photoSer"
                                    placeholder={serviceImage}
                                    required
                                />
                            </div>
                            <div>
                                <Label value="Service Name"></Label>
                                <TextInput
                                    id="nameSer"
                                    placeholder={serviceName}
                                    required
                                />
                            </div>
                            <div>
                                <Label value="Your E-mail"></Label>
                                <TextInput
                                    id="yourEmail"
                                    value={user.email}
                                    readOnly
                                />
                            </div>
                            <div>
                                <Label value="Your Name"></Label>
                                <TextInput
                                    id="yourName"
                                    value={user.displayName}
                                    readOnly
                                />
                            </div>
                            <div>
                                <Label value="Service Price (per person)"></Label>
                                <TextInput
                                    id="priceSer"
                                    type='number'
                                    placeholder={servicePrice}
                                    required
                                />
                            </div>
                            <div>
                                <Label value="Service Area"></Label>
                                <TextInput
                                    id="areaSer"
                                    placeholder={serviceArea}
                                    required
                                />
                            </div>
                            <Label value="Service Description (max 100 characters)"></Label>
                            <div className='col-span-2'>
                                <TextInput id="descSer" placeholder={serviceDescription} required contentEditable maxLength={100} />
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <Button onClick={() => handleUpdateService(_id)} color="success" className="w-full">Update Service</Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        </div>
    );
};

export default MyServCard;