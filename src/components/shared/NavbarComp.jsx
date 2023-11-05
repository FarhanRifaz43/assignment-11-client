import { Navbar, Dropdown } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <div className='bg-transparent absolute top-0 left-0 right-0 z-10 lg:w-3/4 mx-auto pt-6' data-aos="fade-down" data-aos-duration='1000'>
            <Navbar fluid rounded className='bg-transparent'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-4xl font-semibold text-gray-200">GoLocal</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <img src='../../../resources/istockphoto-1341046662-612x612.jpg' alt="" className='w-12 rounded-full'/>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='md:border border-white md:py-3 md:px-6 rounded-full text-white uppercase'>
                    <div className='md:flex bg-white md:bg-transparent text-black md:text-white items-center justify-between'>
                        <NavLink><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Home</h2></NavLink>
                        <NavLink><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Services</h2></NavLink>
                        <NavLink><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Logout</h2></NavLink>
                        <div className='hover:bg-white hover:text-black rounded-full'>
                            <Dropdown color='light bg-transparent' label="DASHBOARD" dismissOnClick={false}>
                                <Dropdown.Item>My Services</Dropdown.Item>
                                <Dropdown.Item>Add Services</Dropdown.Item>
                                <Dropdown.Item>My Schedules</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComp;