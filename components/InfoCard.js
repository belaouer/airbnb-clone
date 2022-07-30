import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
const InfoCard = ({
  image,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className='flex flex-col md:flex-row py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className=' relative mb-2 h-40 flex-grow md:mb-0 md:flex-grow-0 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
          alt='image'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex items-center'>
          <p className=' flex-grow text-xs text-gray-400'>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h4 className='text-xl font-semibold'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-7 text-red-500' />
            {star}
          </p>
          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
