import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contacts = () => {

    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try{
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                    to_name: "Kushagra Pandey",
                    to_email : "kushagra22.aug@gmail.com"
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )

            setLoading(false);
            showAlert({
                show: true,
                text: 'Thank you for your message 😃',
                type: 'success',
            });

            setTimeout(() => {
                hideAlert(false);
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            }, [3000]);
        }catch (error){
            setLoading(false);
            console.log(error);
            showAlert({
                show: true,
                text: "I didn't receive your message 😢",
                type: 'danger',
            });
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">Contact me</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether it’s building something from scratch, improving your current website, or collaborating on a unique idea, feel free to reach out. I’m always open to new opportunities.
                    </p>

                    <form ref = {formRef} onSubmit = {handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="ex., John Doe"
                        />
                    </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                </form>
                </div>
            </div>
        </section>
    )
}
export default Contacts
