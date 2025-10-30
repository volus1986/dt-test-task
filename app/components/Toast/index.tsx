import React, { useEffect, useState } from "react";
import {closeIcon} from './icons/close';

type ToastProps = {
    message: string;
    duration?: number;
    closeButton: boolean;
};

export default function Toast({ message, duration = 3000, closeButton }: ToastProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, message]);

    const handleClose = () => {
        setVisible(false);
    };

    const closeBtn = () => {
        if(!closeButton) return null;

        return <button
            onClick={handleClose}
            className="absolute -top-2 -right-4 text-white font-bold bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center shadow-md"
            aria-label="Close">
            {closeIcon}
        </button>

    }

    return (
        <div
            className={`fixed bottom-5 right-5 p-4 text-white bg-gray-800 rounded transition-all duration-300 transform flex items-center space-x-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
            {closeBtn()}
            <span className="flex-1">{message}</span>
        </div>
    );
}
