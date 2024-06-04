import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PillList = ({ children }: Props) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,140px)] gap-2 justify-center md:justify-start'>
      {children}
    </ul>
  );
};

export default PillList;
