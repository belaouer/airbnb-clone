import Image from "next/image";

const Banner = () => {
  return (
    <div className='flex justify-center items-center relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />

      <div className='absolute flex flex-col justify-center items-center'>
        <p className='text-sm sm:text-lg font-bold'>
          Not sure where to go? Perfect.
        </p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  );
};
export default Banner;
