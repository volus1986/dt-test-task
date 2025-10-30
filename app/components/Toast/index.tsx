import React, { useEffect, useState } from "react";

type ToastProps = {
    message: string;
    duration?: number;
};

export default function Toast({ message, duration = 3000 }: ToastProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, message]);

    return (
        <div
            className={`fixed bottom-5 right-5 p-4 text-white bg-gray-800 transition-all duration-300 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {message}
        </div>
    );
}
