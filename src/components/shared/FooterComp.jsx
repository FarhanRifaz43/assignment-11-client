import { Button, Footer, Label, TextInput } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const FooterComp = () => {
    return (
        <Footer className='bg-black rounded-none mt-8 pt-6'>
            <div className="w-[90%] mx-auto">
                <div className="grid mx-auto grid-cols-1 gap-8 px-6 py-8 md:grid-cols-4">
                    <div className='w-fit mx-auto'>
                        <h2 className='font-bold text-4xl text-gray-300'>GoLocal</h2>
                        <p className='text-gray-300'>Tours and Guides</p>
                        <p className='text-gray-500 text-sm mt-6 w-fit mx-auto'>123 Main Street <br />
                            Gulshan 1 <br />
                            Dhaka 1212, Bangladesh
                        </p>
                    </div>
                    <div>
                        <Footer.Title title="help center" className='text-gray-300' />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Discord Server</Footer.Link>
                            <Footer.Link href="#">Twitter</Footer.Link>
                            <Footer.Link href="#">Facebook</Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" className='text-gray-300' />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <h2 className='text-gray-300 font-bold text-2xl mb-6'>Subscribe to Newsletter</h2>
                        <div className="max-w-md">
                            <div className="mb-6 block">
                                <Label htmlFor="email4" value="Provide your email to receive newsletters about latest tours and services every week!" className='text-gray-500' />
                            </div>
                            <div className='flex items-center'>
                                <TextInput id="email4" type="email" icon={HiMail} placeholder="you@email.com" required/>
                                <Button color='transparent' className='text-gray-300 border'>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto bg-black border-t border-gray-500 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="GoLocal™" year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComp;