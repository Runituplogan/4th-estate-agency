import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor:string;
}

const Card: React.FC<CardProps> = ({ title, description, bgColor,textColor ='white' }) => {
  return (
    <div className={`w-full p-6 md:p-8 md:w-1/3 rounded-2xl ${bgColor} flex flex-col text-${textColor} ${bgColor}`}>
      <h3 className="text-xl md:text-2xl  leading-tight font-baskerville mb-4">{title}</h3>
      <p className="text-xs md:text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
