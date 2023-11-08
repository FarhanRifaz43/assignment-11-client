import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="relative">
                <div className="bg-black h-[650px]"></div>
                <div className="h-[360px] absolute top-0 w-full">
                    <h2 className="text-white text-9xl mt-60 w-fit mx-auto font-bold">404</h2>
                    <p className="text-white text-2xl w-fit mx-auto">Page Not Found</p>
                    <Link to={'/'}><Button color="gray" className="w-fit mx-auto mt-8" pill>Back to Home</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;