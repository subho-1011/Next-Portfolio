"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Say Hello";
    const email = "subho.p.1011@gmail.com";

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY!,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLETE_KEY!,
                form.current!,
                process.env.NEXT_PUBLIC_ACCOUNT_API_KEY
            )
            .then(
                () => {
                    setSuccess(true);
                    if (form.current) {
                        (form.current as HTMLFormElement).reset();
                    }
                },
                () => {
                    setError(true);
                }
            );
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-full overflow-scroll flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="h-[30vh] md:h-full md:w-1/2 flex flex-col items-center justify-center py-10 md:p-0 text-4xl md:text-6xl">
                    <div className="text-purple-500">
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        😊
                    </div>
                    <div className=" text-xl mt-10 text-center text-black/60">
                        {email}
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="h-[70vh] mx-5 md:h-full md:w-1/2 bg-rose-50 text-purple-500 rounded-xl sm:text-xl flex flex-col gap-8 justify-center p-12 md:p-24"
                >
                    <span>Dear Subhajit,</span>
                    <textarea
                        rows={4}
                        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                        name="user_message"
                    />
                    <span>Mail address is:</span>
                    <input
                        name="user_email"
                        type="text"
                        className="bg-transparent border-b-2 border-b-black outline-none"
                    />
                    <span>Regards</span>
                    <button className="bg-purple-200 delay-150 hover:bg-purple-300 rounded font-semibold text-purple-600 hover:text-purple-800 p-4">
                        Send
                    </button>
                    {success && (
                        <span className="text-green-600 font-semibold">
                            Your message has been sent successfully!
                        </span>
                    )}
                    {error && (
                        <span className="text-red-600 font-semibold">
                            Something went wrong!
                        </span>
                    )}
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
