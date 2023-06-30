
import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";
  import {
    ChevronDownIcon,
    UserCircleIcon,
    CubeTransparentIcon,
    Bars3Icon,
    XMarkIcon,
    FlagIcon,
    ChatBubbleOvalLeftIcon,
    UsersIcon,
    FolderIcon,
    Square3Stack3DIcon,
    RocketLaunchIcon,
    FaceSmileIcon,
    PuzzlePieceIcon,
    GiftIcon,
  } from "@heroicons/react/24/outline";
import NavList from '../commons/NavList';
import { Link } from 'react-router-dom';


const Header = () => {

const [openNav, setOpenNav] = React.useState(false);
 
 React.useEffect(() => {
   window.addEventListener(
     "resize",
     () => window.innerWidth >= 960 && setOpenNav(false)
   );
 }, []);

 return (
    <>
   <Navbar className="mx-auto  px-4 py-2 rounded-none  max-w-full">
     <div className="flex items-center justify-between text-blue-gray-900">
       <Link to={'/'}>
       <Typography
         variant="h6"
         className="mr-4 cursor-pointer py-1.5 lg:ml-2 apply-font"
       >
         Material Tailwind
       </Typography>
        </Link>
       <div className="hidden lg:block">
         <NavList />
       </div>
       <div className="hidden gap-2 lg:flex">
         <Button variant="text" size="sm" color="blue-gray">
           Sign In
         </Button>
         <Button variant="gradient" size="sm">
           Sign Up
         </Button>
       </div>
       <IconButton
         variant="text"
         color="blue-gray"
         className="lg:hidden"
         onClick={() => setOpenNav(!openNav)}
       >
         {openNav ? (
           <XMarkIcon className="h-6 w-6" strokeWidth={2} />
         ) : (
           <Bars3Icon className="h-6 w-6" strokeWidth={2} />
         )}
       </IconButton>
     </div>
     <Collapse open={openNav}>
       <NavList />
       <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
         <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
           Sign In
         </Button>
         <Button variant="gradient" size="sm" fullWidth>
           Sign Up
         </Button>
       </div>
     </Collapse>
   </Navbar>

    </>
  )
}

export default Header