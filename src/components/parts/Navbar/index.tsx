import { getUser } from '@/repositories/user';

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = async () => {
  const { data: user } = await getUser();

  return (
    <>
      <NavbarDesktop resume={user.resume} />
      <NavbarMobile resume={user.resume} />
    </>
  );
};

export default Navbar;
