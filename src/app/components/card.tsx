import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor:string;
}

const Card: React.FC<CardProps> = ({ title, description, bgColor, textColor = 'white' }) => {
  return (
    <div className={`w-full p-6 md:p-8 md:w-1/3 rounded-xl ${bgColor} flex flex-col text-${textColor}`}>
      <h3 className="text-[24px] md:text-2xl leading-[1.3] font-baskerville mb-4">{title}</h3>
      <p className="text-[14px] md:text-base leading-[1.6]">{description}</p>
    </div>
  );
};


export default Card;
