import {ListItem, Typography} from "@material-tailwind/react";
import React from "react";
import { Link } from 'react-router-dom'

function NavItem({ navProps }:any) {
    return (
        <>
            <Link to={navProps.link}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-sm text-black">
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        {navProps.tittle}
                    </ListItem>
                </Typography>
            </Link>
        </>
    )
}

export default NavItem;
