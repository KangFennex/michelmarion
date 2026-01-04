import { StripePattern } from '../shared';
import { useTheme } from '../../contexts/ThemeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import avatar from '../../assets/avatar/avatar.png';
import heroImg1 from '../../assets/heroImgs/dmitrii-zhodzishskii-2K5kuh3NRvk-unsplash.jpg';
import heroImg2 from '../../assets/heroImgs/iwona-castiello-d-antonio-7IQvBsc49GY-unsplash.jpg';
import heroImg3 from '../../assets/heroImgs/manuel-cosentino-n--CMLApjfI-unsplash.jpg';
import heroImg4 from '../../assets/heroImgs/allphoto-bangkok-o4ispOaaO48-unsplash.jpg';
import heroImg5 from '../../assets/heroImgs/evan-wise--Y5CKQ9goZA-unsplash.jpg';


const HERO_IMAGES = [
    heroImg1,
    heroImg2,
    heroImg3,
    heroImg4,
    heroImg5,
];


const HERO_LEAD = [
    "Frontend Developer",
    "Next.js · React · TypeScript",
]

export function Hero() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentLeadIndex, setCurrentLeadIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
            setCurrentLeadIndex((prev) => (prev + 1) % HERO_LEAD.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full">
            <div className="mx-auto md:max-w-4xl max-w-7xl">
                <div className="flex">
                    <StripePattern position="left" />

                    <div className="flex-1 flex flex-col pb-4 md:pb-0 ">
                        {/* Background Images Section */}
                        <div className="relative h-100 overflow-hidden">
                            {/* Background Images Container */}
                            <div className="absolute inset-0">
                                <AnimatePresence>
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 3,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={HERO_IMAGES[currentImageIndex]}
                                            alt={`Hero background ${currentImageIndex + 1}`}
                                            className="w-full h-full object-cover"
                                            style={{
                                                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
                                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)'
                                            }}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Content Section Below Images */}
                        <div className="flex items-start gap-4 px-2 md:mb-2">
                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <div className="relative h-30 w-30 md:h-35 md:w-35 rounded-full shadow-2xl">
                                    <div className={`h-full w-full rounded-full overflow-hidden flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'
                                        }`}>
                                        <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Hero Content */}
                            <div className="space-y-2 flex-1 mt-auto mb-6">
                                <h1 className={`goldman tracking-wider text-2xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Michel Marion
                                </h1>
                                <div className="relative h-6 md:h-7">
                                    <AnimatePresence>
                                        <motion.p
                                            key={currentLeadIndex}
                                            initial={{ opacity: 0, filter: 'blur(8px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, filter: 'blur(8px)' }}
                                            transition={{
                                                duration: 0.8,
                                                ease: "easeInOut"
                                            }}
                                            className={`tracking-wider text-[1rem] md:text-xl leading-relaxed absolute inset-0 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
                                        >
                                            {HERO_LEAD[currentLeadIndex]}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    <StripePattern position="right" />
                </div>
            </div>
        </section>
    )
}