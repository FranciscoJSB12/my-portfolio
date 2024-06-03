import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const NavButton = ({ children, onClick }: Props) => {
  return (
    <button
      className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;
