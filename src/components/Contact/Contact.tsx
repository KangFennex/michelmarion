import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { ContactForm } from "./ContactForm";
import { StripePattern } from "../shared";

interface ContactModalProps {
    buttonText?: string;
}

export function Contact({ buttonText = "Contact" }: ContactModalProps) {
    const [showContact, setShowContact] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setShowContact(!showContact);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Check if the click target contains the icon element
            const iconEl = document.querySelector(".contact-modal-close");
            if (iconEl && iconEl.contains(event.target as Node)) {
                return;
            }

            // Make the menu disappear if you click outside of it
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowContact(false);
            }
        }

        function handleMouseDown(event: MouseEvent) {
            handleClickOutside(event);
        }

        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    const showModal = {
        hidden: {
            opacity: 0,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <>
            <section className={`w-full border-y ${isDark ? 'border-white/20' : 'border-gray-300'}`}>
                <div className="mx-auto md:max-w-4xl max-w-7xl">
                    <div className="flex">
                        <StripePattern position="left" />

                        <div className="flex-1 flex flex-col p-5">
                            <div className="px-4 py-6 space-y-6 text-center">
                                <h2 className="text-md md:text-4xl font-semibold">Get in Touch</h2>
                                <p className="md:text-lg text-gray-400 max-w-2xl mx-auto">
                                    I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                                </p>
                            </div>
                            <button
                                onClick={handleClick}
                                className="btn hologram relative mx-auto cursor-pointer overflow-hidden text-white font-semibold text-lg md:text-xl transition-all duration-400"
                                style={{
                                    padding: '0.6rem 3rem',
                                    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
                                    background: 'rgba(0, 255, 255, 0.1)',
                                    border: '2px solid rgba(0, 255, 255, 0.5)',
                                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
                                    backdropFilter: 'blur(5px)',
                                }}
                            >
                                <span
                                    className="hologram-text relative inline-block"
                                    data-text={buttonText}
                                    style={{
                                        textShadow: '0 0 8px rgba(0, 255, 255, 0.5)'
                                    }}
                                >
                                    {buttonText}
                                </span>
                                <div className="scan-line" />
                            </button>
                            <div className="flex gap-6 justify-center items-center mt-8">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-all duration-300 hover:scale-110 hover:opacity-70 ${isDark ? 'text-white' : 'text-black'
                                        }`}
                                >
                                    <Github size={28} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-all duration-300 hover:scale-110 hover:opacity-70 ${isDark ? 'text-white' : 'text-black'
                                        }`}
                                >
                                    <Linkedin size={28} />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-all duration-300 hover:scale-110 hover:opacity-70 ${isDark ? 'text-white' : 'text-black'
                                        }`}
                                >
                                    <Instagram size={28} />
                                </a>
                            </div>
                            <AnimatePresence>
                                {showContact && (
                                    <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999]">
                                        <motion.div
                                            className={`p-4 md:p-5 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] z-[10000] w-[90%] min-w-[300px] max-w-[1000px] mx-4
                                    ${isDark ? 'bg-gray-800/90' : 'bg-white/90'}`}
                                            ref={modalRef}
                                            variants={showModal}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                        >
                                            <IoCloseSharp
                                                size={45}
                                                onClick={handleClick}
                                                className={`ml-auto cursor-pointer contact-modal-close ${isDark ? 'text-gray-300' : 'text-gray-900'} hover:opacity-70 transition-opacity`}
                                            />
                                            <ContactForm />
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                        <StripePattern position="right" />
                    </div>

                </div>
            </section>

            <style>{`
                .hologram-text::before,
                .hologram-text::after {
                    content: attr(data-text);
                    position: absolute;
                    left: 0;
                    opacity: 0;
                    filter: blur(1px);
                    transition: all 0.3s ease;
                }

                .hologram-text::before {
                    top: -2px;
                    color: #ff00ff;
                    transform: translateX(0);
                    animation: glitch 2s infinite;
                }

                .hologram-text::after {
                    bottom: -2px;
                    color: #00ffff;
                    transform: translateX(0);
                    animation: glitch 2s infinite reverse;
                }

                .scan-line {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(
                        to right,
                        transparent,
                        rgba(0, 255, 255, 0.8),
                        transparent
                    );
                    top: 0;
                    animation: scan 2s linear infinite;
                    filter: blur(1px);
                    pointer-events: none;
                }

                @keyframes glitch {
                    0%, 100% { transform: translateX(0); opacity: 0.3; }
                    20% { transform: translateX(-5px); opacity: 0.5; }
                    40% { transform: translateX(5px); opacity: 0.7; }
                    60% { transform: translateX(-3px); opacity: 0.5; }
                    80% { transform: translateX(3px); opacity: 0.3; }
                }

                @keyframes scan {
                    0% { top: -10%; }
                    100% { top: 110%; }
                }
            `}</style>
        </>
    );
}