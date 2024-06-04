import NavLink from './NavLink';
import navLinks from '@/constants/navlinks';

type NavlinkType = typeof navLinks;

interface Props {
  links: NavlinkType;
}

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map(link => (
        <li key={link.title}>
          <NavLink
            title={link.title}
            href={link.path}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
