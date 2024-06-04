import Image from 'next/image';
import { IoLogoGithub, IoIosEye } from 'react-icons/io';

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  gitHubUrl: string;
  projectUrl: string;
  stack: string[];
  role: string;
}

const ProjectCard = ({
  imageSrc,
  title,
  description,
  gitHubUrl,
  projectUrl,
  stack,
  role,
}: Props) => {
  return (
    <div className='w-full max-w-[300px] bg-[#181818] rounded-lg'>
      <figure>
        <Image
          className='rounded-t-lg'
          src={imageSrc}
          alt={title}
          width={300}
          height={150}
        />
      </figure>
      <figcaption className='p-2'>
        <h5 className='text-xl font-semibold mb-2 text-white text-center'>
          {title}
        </h5>
        <p className='text-[#ADB7BE] mb-2'>{description}</p>
        <h5 className='text-md font-semibold my-2 text-white text-center'>
          Tecnologías empleadas:
        </h5>
        <p className='text-[#ADB7BE] text-sm mb-2 flex gap-2 justify-center flex-wrap'>
          {stack.map(t => (
            <span
              key={t}
              className='bg-[#121212] px-2 py-1 rounded-lg'
            >
              {t}
            </span>
          ))}
        </p>
        <h2 className='text-md font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-blue-200 text-center'>
          Puesto:&nbsp;{role}
        </h2>
        <div className='py-2 flex justify-evenly'>
          <div>
            <a
              href={gitHubUrl}
              target='_blank'
            >
              <IoLogoGithub className='text-[#ADB7BE] text-4xl hover:text-blue-800' />
            </a>
          </div>
          <div>
            <a
              href={projectUrl}
              target='_blank'
            >
              <IoIosEye className='text-[#ADB7BE] text-4xl hover:text-blue-800' />
            </a>
          </div>
        </div>
      </figcaption>
    </div>
  );
};

export default ProjectCard;
