'use client'

import React, {useState} from "react";
import {clearIcon} from "./icons/clear";
import {hiddenIcon} from "./icons/hidden";
import {visibleIcon} from "./icons/visible";

type InputProps = {
    type: string;
    clearable: boolean;
    onChange: (value: string) => React.ChangeEvent<HTMLInputElement>
};

export default function Input({type="password", clearable=true, onChange}: InputProps) {
    const [value, setValue] = useState("");
    const [isVisible, setVisible] = useState(false);

    const changePasswordVisible = () => {
        setVisible((prev) => !prev);
    }

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange?.(e.target.value);
    }

    const clearValue = () => {
        setValue("");
    }

    const clearButton = () => {
        if (!clearable) return null;

        return <button
            onClick={clearValue}>
            {clearIcon}
        </button>
    }

    const changeTypeButton = () => {
        if (type !== 'password') return null;

        return <button
            onClick={changePasswordVisible}>
            {isVisible ? visibleIcon : hiddenIcon}
        </button>
    }

    return <div className="flex gap-1 w-full">
        <input
            className="border border-gray-300 rounded"
            placeholder="Type here..."
            onChange={handleValueChange}
            value={value}
            type={isVisible ? "text" : "password"}
        />
        {changeTypeButton()}
        {clearButton()}
    </div>
}
