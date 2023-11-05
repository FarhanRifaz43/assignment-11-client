import { Button, Navbar, Dropdown } from 'flowbite-react';
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <div className='bg-transparent fixed top-0 left-0 right-0 z-10 w-3/4 mx-auto pt-6'>
            <Navbar fluid rounded className='bg-transparent'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-4xl font-semibold text-gray-200">GoLocal</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button color='light' pill>GET STARTED<BsArrowRight className='ml-2'></BsArrowRight></Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='border border-white py-3 px-6 rounded-full text-white uppercase'>
                    <div className='flex items-center justify-between'>
                        <NavLink><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Home</h2></NavLink>
                        <NavLink><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Services</h2></NavLink>
                        <NavLink><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Logout</h2></NavLink>
                        <div className='hover:bg-white hover:text-black rounded-full'>
                            <Dropdown color='light bg-transparent' label="DASHBOARD" dismissOnClick={false}>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComp;