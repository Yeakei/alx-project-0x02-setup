import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
};

const Button = ({ size = "medium", shape = "rounded-md", children, onClick, className = "" }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} ${className} hover:bg-blue-600 transition`}
        >
            {children}
        </button>
    );
};

export default Button;
