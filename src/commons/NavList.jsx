import React from "react";
import { Typography, List, ListItem } from "@material-tailwind/react";
import {
  UserCircleIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import NavListMenu from "./NavListMenu";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        // as="a"
        // href="/font-picker-demo"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to={"/font-picker-demo"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <CubeTransparentIcon className="h-[18px] w-[18px]" />
            Blocks
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to={'/higher-order'}>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Account
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
};

export default NavList;
