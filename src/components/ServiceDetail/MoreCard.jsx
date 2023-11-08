import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const MoreCard = ({ e }) => {
    const { serviceImage, serviceName, servicePrice, _id } = e;

    return (
        <Card className="rounded-2xl relative h-fit">
            <img src={serviceImage} alt="" className="rounded-2xl h-48 object-cover" />
            <div>
                <div className="">
                    <h2 className="font-bold text-2xl text-center h-16">{serviceName}</h2>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                            <h2>$ <span className='text-2xl font-bold'>{servicePrice}</span>/person</h2>
                    </div>
                    <Link to={`/services/${_id}`}><Button color="gray">View Details</Button></Link>
                </div>
            </div>
        </Card>
    );
};

export default MoreCard;