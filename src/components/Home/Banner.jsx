const Banner = () => {
    return (
        <div className="relative h-screen">
            <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay muted loop>
                <source src="../../../resources/1105.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1">
                <div className="relative z-2 text-white text-3xl font-bold p-4">
                </div>
            </div>
        </div>
    );
};

export default Banner;