import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Dropdown, Table } from 'flowbite-react';

const MySchedule = () => {

    const [bookings, setBookings] = useState([]);
    const [pendings, setPendings] = useState([]);
    const { user } = useContext(AuthContext);
    const urlBooking = `http://localhost:3000/bookings?email=${user.email}`;
    const urlPending = `http://localhost:3000/pendings?name=${user.displayName}`;

    useEffect(() => {
        fetch(urlBooking)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [urlBooking])

    useEffect(() => {
        fetch(urlPending)
            .then(res => res.json())
            .then(data => setPendings(data))
    }, [urlPending])

    const handleStateUpdate = (id, state) => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: state})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                const remaining = pendings.filter(pending => pending._id !== id);
                const updated = pendings.filter(pending => pending._id === id);
                updated.status = state;
                const newPendings = [updated, ...remaining];
                setPendings(newPendings);
            }
        })
    }

    return (
        <div>
            <div className="relative">
                <img src="../../resources/pexels-rushow-khan-122107.jpg" className="h-[360px] w-full object-cover" alt="" />
                <div className="h-[360px] bg-gradient-to-b from-[#0000008d] to-[#00000067] absolute top-0 w-full">
                    <h2 className="text-white text-7xl mt-60 ml-28" data-aos="fade-right" data-aos-duration="1000">Services You Booked</h2>
                </div>
            </div>
            <section className="w-[75%] mx-auto shadow-xl">
                <h2 className="text-center mt-14 text-3xl font-bold mb-8">Your Bookings</h2>
                {
                    (bookings.length > 0) && <Table>
                        <Table.Head>
                            <Table.HeadCell>Image</Table.HeadCell>
                            <Table.HeadCell>Service Name</Table.HeadCell>
                            <Table.HeadCell>Service Area</Table.HeadCell>
                            <Table.HeadCell>Provider Name</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                bookings.map(booking =>
                                    <>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell><img className="w-10 h-10 object-cover rounded-xl" src={booking.serviceImage} /></Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {booking.serviceName}
                                            </Table.Cell>
                                            <Table.Cell>{booking.serviceArea}</Table.Cell>
                                            <Table.Cell>{booking.serviceProviderName}</Table.Cell>
                                            <Table.Cell>${booking.servicePrice}/person</Table.Cell>
                                        </Table.Row>
                                    </>)
                            }
                        </Table.Body>
                    </Table>
                }
                {
                    (bookings.length < 1) && <div>
                        <h2 className="text-center text-xl text-gray-600">No Services Booked Yet.</h2>
                    </div>
                }
            </section>
            <section className="w-[75%] mx-auto shadow-xl">
                <h2 className="text-center mt-14 text-3xl font-bold mb-8">Your Pending Works</h2>
                {
                    (pendings.length > 0) && <Table>
                        <Table.Head>
                            <Table.HeadCell>Image</Table.HeadCell>
                            <Table.HeadCell>Service Name</Table.HeadCell>
                            <Table.HeadCell>Receiver Email</Table.HeadCell>
                            <Table.HeadCell>Service Area</Table.HeadCell>
                            <Table.HeadCell>Service Date</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                pendings.map(pending =>
                                    <>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell><img className="w-10 h-10 object-cover rounded-xl" src={pending.serviceImage} /></Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {pending.serviceName}
                                            </Table.Cell>
                                            <Table.Cell>{pending.receiverEmail}</Table.Cell>
                                            <Table.Cell>{pending.serviceArea}</Table.Cell>
                                            <Table.Cell>{pending.serviceDate}</Table.Cell>
                                            <Table.Cell>${pending.servicePrice}/person</Table.Cell>
                                            <Table.Cell>
                                                <Dropdown label={pending?.status ? pending.status : 'Pending'} color="success" dismissOnClick={false}>
                                                    <Dropdown.Item onClick={() => handleStateUpdate(pending._id, 'Pending')}>Pending</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleStateUpdate(pending._id, 'In Progress')}>In Progress</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleStateUpdate(pending._id, 'Completed')}>Completed</Dropdown.Item>
                                                </Dropdown></Table.Cell>
                                        </Table.Row>
                                    </>)
                            }
                        </Table.Body>
                    </Table>
                }
                {
                    (pendings.length < 1) && <div>
                        <h2 className="text-center text-xl text-gray-600">No Services Pending.</h2>
                    </div>
                }
            </section>
        </div>
    );
};

export default MySchedule;