import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="relative flex flex-col items-center bg-darkGrayishBlue p-6 rounded-lg shadow-lg max-w-[400px] h-auto justify-center">
            {children}
        </div>
    );
};

export default Card;