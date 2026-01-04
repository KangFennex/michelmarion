import { useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [statusMessage, setStatusMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage("");

        if (!form.current) return;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
        }).then(
            (result) => {
                console.log("Success!", result);
                setStatusMessage("Message sent successfully! I'll get back to you soon.");
                setIsError(false);
                setIsLoading(false);
                form.current?.reset();
            },
            (error) => {
                console.log("Error details:", error);
                setStatusMessage(`Error: ${error.text || "Something went wrong. Please try again."}`);
                setIsError(true);
                setIsLoading(false);
            }
        );
    };

    return (
        <div className="w-full h-full text-center flex justify-center">
            <div className="flex flex-col mt-8 md:mt-0 w-full max-w-[800px]">
                <form ref={form} onSubmit={handleOnSubmit} className="w-full flex flex-col items-center">
                    <h1 className="text-4xl font-bold mb-6 md:text-5xl">Get in Touch</h1>
                    {statusMessage && (
                        <div
                            className={`p-4 mb-4 rounded-lg text-center font-semibold border-2 ${isError
                                ? 'bg-red-500/20 text-red-400 border-red-500'
                                : 'bg-green-500/20 text-green-400 border-green-500'
                                }`}
                        >
                            {statusMessage}
                        </div>
                    )}

                    <input
                        className={`w-full h-12 px-3 py-3 border-none resize-none text-base rounded-2xl my-4 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.1)] transition-shadow duration-300 focus:outline-none md:text-3xl md:h-14 md:px-4
                            ${isDark
                                ? 'bg-gray-900 text-gray-300 hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6),0_4px_6px_rgba(0,0,0,0.1)]'
                                : 'bg-white/80 text-gray-900 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.2)]'
                            }`}
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        required
                        disabled={isLoading}
                    />
                    <input
                        className={`w-full h-12 px-3 py-3 border-none resize-none text-base rounded-2xl my-4 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.1)] transition-shadow duration-300 focus:outline-none md:text-3xl md:h-14 md:px-4
                            ${isDark
                                ? 'bg-gray-900 text-gray-300 hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6),0_4px_6px_rgba(0,0,0,0.1)]'
                                : 'bg-white/80 text-gray-900 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.2)]'
                            }`}
                        type="email"
                        name="from_email"
                        placeholder="Email"
                        required
                        disabled={isLoading}
                    />
                    <textarea
                        className={`w-full pt-4 px-3 py-3 border-none resize-none text-base rounded-2xl my-4 h-32 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.1)] transition-shadow duration-300 focus:outline-none md:text-3xl md:h-64 md:pt-6
                            ${isDark
                                ? 'bg-gray-900 text-gray-300 hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6),0_4px_6px_rgba(0,0,0,0.1)]'
                                : 'bg-white/80 text-gray-900 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.2)]'
                            }`}
                        name="message"
                        placeholder="Message"
                        required
                        disabled={isLoading}
                    />
                    <motion.input
                        className={`flex justify-center items-center border-none cursor-pointer w-48 rounded-lg px-3 py-3 text-xl font-semibold mt-6 mx-auto shadow-[inset_0_0_0_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.1)] transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed md:text-3xl md:w-80 md:px-4 md:py-4
                            ${isDark
                                ? 'bg-gray-700 text-gray-300 hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6),0_4px_6px_rgba(0,0,0,0.1)]'
                                : 'bg-orange-300 text-gray-900 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.2)]'
                            }`}
                        type="submit"
                        value={isLoading ? "Sending..." : "Send"}
                        disabled={isLoading}
                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                    />
                </form>
            </div>
        </div>
    );
}
