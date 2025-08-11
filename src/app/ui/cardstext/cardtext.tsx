import Image from 'next/image';

interface CardTextProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CardText: React.FC<CardTextProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl m-4 bg-white relative">
      <Image className="w-full bg-gray-800 p-5" 
      src={imageSrc} 
      alt={imageAlt} 
      width={400} 
      height={250} 
      objectFit="cover" />
      <div className="px-6 py-4 border-t-2 border-gray-200">
        <div className="font-bold text-xl text-black mb-2">{title}</div>
        <p className="text-gray-700 text-base min-h-[200px]">
          {description}
        </p>
      </div>
      <div className="w-full absolute bottom-0">
        <a href={buttonLink} className="btn  w-full mt-2 ">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CardText;
