import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <div className="pt-28 p-5 max-w-screen-3xl flex flex-col md:flex-row md:gap-8">
            <div className="mb-10 w-full  md:mb-0 md:w-1/2 ">
                <h2 className="mb-6 text-4xl md:text-6xl inter-font font-semibold">
                    Contact me
                </h2>
                <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, modi accusantium ipsum corporis quia asperiores
                    dolorem nisi corrupti eveniet dolores ad maiores repellendus
                    enim autem omnis fugiat perspiciatis? Ad, veritatis.
                </p>
                <p className="mb-2">billweaverphotovideo@gmail.com</p>
                <p className="mb-2">07825 294136</p>
            </div>
            <div className="mb-10 w-full md:mb-0 md:w-1/2">
                <ContactForm />
            </div>
        </div>
    );
}
