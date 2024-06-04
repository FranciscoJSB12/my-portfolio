import Image from 'next/image';

const HeroSection = () => {
  return (
    <article className='grid grid-cols-1 md:grid-cols-12 gap-y-5'>
      <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
          Bienvenido,&nbsp;
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200'>
            soy Francisco Javier
          </span>
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg break-words md:pr-10'>
          Me dedico a crear Software como desarrollador Full Stack, pudiendo
          trabajar así en el desarrollo de aplicaciones web y móviles.
          ¿Necesitas crear un producto digital o un profesional para tu equipo?
          ¡Vamos a contactar!
        </p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200 hover:bg-slate-200 text-black'>
            Contacto
          </button>
          <button className='p-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200 hover:bg-slate-800 text-white'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
              Descargar CV
            </span>
          </button>
        </div>
      </div>
      <div className='col-span-5 place-self-center'>
        <figure
          className='bg-gradient-to-br from-blue-900
      via-blue-500  to-blue-200 w-[290px] h-[290px] rounded-full flex justify-center items-center'
        >
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
    </article>
  );
};

export default HeroSection;
