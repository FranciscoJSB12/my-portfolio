import Image from 'next/image';

const HeroSection = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-12 gap-y-5'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            Welcome to
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-blue-100'>
              &nbsp;Francisco's Portfolio
            </span>
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg break-words md:pr-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, non
            expedita? Blanditiis saepe beatae veritatis, aut repellat rerum
            dicta fuga, consequatur minima voluptatum, maiores in. Hic corrupti
            nemo ratione eveniet.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200 hover:bg-slate-200 text-black'>
              Hire me
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white'>
              Dowload CV
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center'>
          <figure className='bg-gradient-to-br from-blue-900  to-blue-100 w-[290px] h-[290px] rounded-full flex justify-center items-center'>
            <div className='rounded-full bg-[#181818] w-[280px] h-[280px]'>
              <Image
                src='/images/fran-photo.png'
                alt="Fran's photo"
                width={280}
                height={280}
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
