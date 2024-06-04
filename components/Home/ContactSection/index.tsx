import { IoLogoLinkedin, IoMdMail, IoLogoGithub } from 'react-icons/io';

const ContactSection = () => {
  return (
    <footer
      className='bg-[#181818] px-5 py-5 mt-10'
      id='contact'
    >
      <h2 className='font-bold text-2xl text-white text-center mb-6'>
        Contacto
      </h2>
      <ul className='flex justify-center gap-10 flex-wrap'>
        <li className='flex items-center gap-1 p-1'>
          <span>
            <IoMdMail className='text-[#ADB7BE] text-3xl' />
          </span>
          <span className='text-[#ADB7BE] text-md'>javif8@gmail.com</span>
        </li>
        <li className='hover:bg-blue-800 p-1 rounded-lg'>
          <a
            href='https://www.linkedin.com/in/francisco-javier-salazar-215408250/'
            target='_blank'
            className='flex items-center gap-1'
          >
            <span>
              <IoLogoLinkedin className='text-[#ADB7BE] text-3xl' />
            </span>
            <span className='text-[#ADB7BE] text-md'>LinkedIn</span>
          </a>
        </li>
        <li className='hover:bg-blue-800 p-1 rounded-lg'>
          <a
            href='https://github.com/FranciscoJSB12/'
            target='_blank'
            className='flex items-center gap-1'
          >
            <span>
              <IoLogoGithub className='text-[#ADB7BE] text-3xl' />
            </span>
            <span className='text-[#ADB7BE] text-md'>GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default ContactSection;
