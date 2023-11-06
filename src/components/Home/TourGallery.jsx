const TourGallery = () => {
    return (
        <div className="w-[85%] mx-auto">
            <h2 className="text-5xl text-center mt-20 mb-3" data-aos="fade-up" data-aos-duration='1000'>Tour Gallery</h2>
            <p className="text-center text-gray-500 mb-16" data-aos="fade-up" data-aos-duration='1000'>Shots taken by our customers</p>
            <div className="grid grid-cols-8 gap-4">
                <img data-aos="fade-left" data-aos-duration='600' className="col-span-4 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/d7XTsPf/sajek-4697901-1280.jpg" alt="" />
                <img data-aos="fade-down" data-aos-duration='700' className="col-span-2 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/djRN9G7/sylhet-4296348-1280.jpg" alt="" />
                <img data-aos="fade-right" data-aos-duration='800' className="col-span-2 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/sv0tvh3/inani-beach-2496530-1280.jpg" alt="" />
                <img data-aos="fade-up" data-aos-duration='600' className="col-span-3 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/R3Ddr20/train-4998318-1280.jpg" alt="" />
                <img data-aos="fade-left" data-aos-duration='700' className="col-span-2 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/MRDkVkf/bangladesh-3539687-1280.jpg" alt="" />
                <img data-aos="fade-up" data-aos-duration='800' className="col-span-3 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/gPz929x/natural-2643941-1280.jpg" alt="" />
                <img data-aos="fade-down" data-aos-duration='600' className="col-span-2 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/8bRYR3Q/pond-55176-1280.jpg" alt="" />
                <img data-aos="fade-left" data-aos-duration='700' className="col-span-3 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/c2T2c3w/bangladesh-3535023-1280.jpg" alt="" />
                <img data-aos="fade-right" data-aos-duration='800' className="col-span-3 h-full w-full object-cover rounded-xl shadow-xl" src="https://i.ibb.co/YP6h49s/natural-2643896-1280.jpg" alt="" />
            </div>
        </div>
    );
};

export default TourGallery;