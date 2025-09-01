import LinkField from "../components/others/LinkField.jsx";
import {ComponentType, createElement} from "react";
import EmailIcon from "../components/icons/EmailIcon.jsx";
import PhoneIcon from "../components/icons/PhoneIcon.jsx";
import supportIcon from "../components/icons/SupportIcon.jsx";
import InputField from "../components/others/InputField.js";
import {FieldValues, useForm} from "react-hook-form";
import Button from "../components/others/Button.js";
import axios from "axios";
import {toast} from "../components/Toaster/Toaster.js";

type FooterType = {
    icon: ComponentType<{ className: string }>;
    title: string,
    desc: string,
    to?: string,
    linkText: string, isLink?: boolean
}

function Contact(): Element {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm();

    async function onSubmit(data: FieldValues) {
        data.name = "Unknown";

        try {
            await axios.post("https://intact-roanna-api-v9-6a640f42.koyeb.app/api/public/submit", data, {
                headers: {
                    "X-API-Key": import.meta.env.VITE_API_KY,
                }
            });

            toast.success("Thanks!");
        } catch {
            toast.error("Something Went Wrong Please try again later.")
        }

    }

    return (
        <section className="bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact
                    Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Got a
                    technical issue? Want to send feedback about a beta feature? Need details about our Business plan?
                    Let us know.</p>
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <InputField label="Your Email" type="text" placeholder="demo@demo.com"
                                    register={register("email", {
                                        required: "Please enter your email",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Please enter a valid email"
                                        }
                                    })}
                                    autoFocus={true}
                                    autoComplete="email"
                                    error={errors.email}/>
                    </div>
                    <div>
                        <InputField label="Subject" type="text" placeholder="Let us know how we can help you"
                                    register={register("subject", {
                                        required: "Please enter a subject",
                                        max: {value: 10, message: "Please enter a valid subject"},
                                    })}
                                    error={errors.subject}
                        />

                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-400">Your
                            message</label>
                        <textarea id="message" rows={6}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a comment..."
                                  {...register("message", {
                                      required: "Please enter your query",
                                      maxLength: {value: 10, message: "Message is too long"},
                                  })}></textarea>
                    </div>
                    <Button text="Send Message" type="submit" isSubmitting={isSubmitting}/>
                </form>
            </div>

            <footer className="flex justify-around flex-wrap pb-10 gap-6 md:gap-0">
                <FooterItem icon={EmailIcon} title="Email us:" linkText="zunaiddev@outlook.com"
                            to="mailto:zunaiddev@outlook.com"
                            desc="Email us for general queries, including marketing and partnership opportunities."/>
                <FooterItem icon={PhoneIcon} title="Call us:" linkText="+91 9690578859" isLink={false}
                            desc="Call us to speak to a member of our team. We are always happy to help."/>
                <FooterItem icon={supportIcon} title="Support" linkText="Support" isLink={false}
                            desc="Email us for general queries, including marketing and partnership opportunities."/>
            </footer>
        </section>
    );
}

function FooterItem({icon, title, desc, to, linkText, isLink}: FooterType) {
    return <div className="flex flex-col items-center justify-between w-full md:w-1/4 gap-2">
        <div
            className="bg-gray-800 rounded-md p-4">
            {createElement(icon, {className: "size-6 text-gray-400"})}
        </div>
        <p className="font-bold text-white text-lg">{title}</p>
        <p className="text-center text-gray-300 max-w-sm">{desc}</p>
        {isLink ?
            <LinkField to={to} text={linkText} underline={true}/> :
            <p className="text-blue-600 w-fit">{linkText}</p>
        }
    </div>;
}

export default Contact;