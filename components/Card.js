import Image from "next/image";

const Card = ({ image, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image
          src={image}
          layout='fill'
          objectFit='contain'
          className='rounded-xl'
          alt='image'
        />
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  );
};
export default Card;
