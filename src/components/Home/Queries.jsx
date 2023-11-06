import { Accordion } from 'flowbite-react';

const Queries = () => {
    return (
        <div className='mb-28'>
            <h2 className="text-5xl text-center mt-20 mb-3" data-aos="fade-up" data-aos-duration='1000'>Curious? We've Got You Covered!</h2>
            <div className='flex gap-12 mt-16 w-[85%] mx-auto' data-aos="fade-up" data-aos-duration='1000'>
                <Accordion collapseAll className='w-1/2 rounded-none border-none'>
                    <Accordion.Panel>
                        <Accordion.Title>How do I book a tour?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Booking a tour with us is easy! Simply visit our website, browse through our available tours, and select the one that interests you. Click on the tour to view more details and click the "Book Now" button. Follow the prompts to provide necessary information and make your reservation.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>What payment methods do you accept?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Rest assured, your payment information is secure and encrypted for your protection.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Can I customize a tour to my preferences?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Absolutely! We understand that everyone has unique preferences. Contact our customer support team and let us know your specific interests and requirements. We'll do our best to tailor a tour that suits you perfectly.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
                <Accordion collapseAll className='w-1/2 rounded-none border-none'>
                    <Accordion.Panel>
                        <Accordion.Title>What is your cancellation policy?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                We understand that plans can change. Our cancellation policy allows for free cancellations up to 48 hours before the tour start time. Within 48 hours, a cancellation fee may apply. Please refer to our Terms and Conditions for more details.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Are your tours suitable for children and families?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Yes, many of our tours are family-friendly! We offer a range of activities suitable for different age groups. Look for family-friendly tours on our website, and feel free to reach out if you need further assistance in selecting the right tour for your family.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>How do I contact customer support?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                You can reach our customer support team through our Contact Us page on the website. We're available 24/7 to assist you with any inquiries or assistance you may need before, during, or after your tour.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default Queries;