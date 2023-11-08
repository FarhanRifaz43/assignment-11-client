import { Navbar, Dropdown } from 'flowbite-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import Swal from 'sweetalert2';

const NavbarComp = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        Swal.fire({
            title: 'Continue?',
            text: "Logging out will end your current session.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2E7D32',
            cancelButtonColor: '##30',
            confirmButtonText: 'Log Out'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Success',
                    'Logged out successfully.',
                    'success'
                )
                logOut()
            }
        })

    }

    return (
        <div className='bg-transparent absolute top-0 left-0 right-0 z-10 lg:w-[85vw] mx-auto pt-6' data-aos="fade-down" data-aos-duration='1000'>
            <Navbar fluid rounded className='bg-transparent'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-4xl font-semibold text-gray-200">GoLocal</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <img src={user ? user.photoURL : 'https://i.ibb.co/7kgBp4r/istockphoto-1341046662-612x612.jpg'} alt="" className='w-12 rounded-full' />
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='md:border border-white md:py-3 md:px-6 rounded-full text-white uppercase'>
                    <div className='md:flex bg-white md:bg-transparent text-black md:text-white items-center justify-between'>
                        <NavLink><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Home</h2></NavLink>
                        <NavLink to={'/services'}><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Services</h2></NavLink>
                        {!user && <NavLink to={'/login'}><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Log In</h2></NavLink>}
                        {user && <>
                            <div className='hover:bg-white hover:text-black rounded-full'>
                                <Dropdown color='light bg-transparent' label="DASHBOARD" dismissOnClick={false}>
                                    <Dropdown.Item><NavLink to={'/my-services'}>My Services</NavLink></Dropdown.Item>
                                    <Dropdown.Item><NavLink to={'/add'}>Add a Service</NavLink></Dropdown.Item>
                                    <Dropdown.Item><NavLink to={'/my-schedule'}>My Schedule</NavLink></Dropdown.Item>
                                </Dropdown>
                            </div>
                            <NavLink onClick={handleLogOut}><h2 className='hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200'>Logout</h2></NavLink>
                        </>}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComp;