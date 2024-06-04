interface Props {
  text: string;
}

const TabPill = ({ text }: Props) => {
  return (
    <li className='p-1 w-[140px] h-fit rounded-full bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200 hover:bg-slate-800 text-white'>
      <span className='block text-center bg-[#121212] rounded-full px-1 py-2'>
        {text}
      </span>
    </li>
  );
};

export default TabPill;
