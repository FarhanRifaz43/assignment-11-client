import { Card } from 'flowbite-react';

const ValueCard = ({ value }) => {

    const { title, description } = value;

    return (
        <Card href="#" className="h-60 rounded-lg border-none bg-zinc-100 shadow-none" data-aos="zoom-in" data-aos-duration='400'>
            <img src="" alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </Card>
    );
};

export default ValueCard;