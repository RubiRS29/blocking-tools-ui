import { Typography} from "@material-tailwind/react";
import React from "react";
import {Link, useLocation} from 'react-router-dom'


interface NabItemProps {
    link : string;
    title : string;
}

const NavItem : React.FC<NabItemProps> = ({ link, title }) =>  {

    const location = useLocation();
    const isActive = location.pathname === link;

    const activeStyles = {
        fontWeight: "bold",
        color: "#3b82f6",
    };

    const defaultStyles = {
    };

    const itemStyle = isActive ? activeStyles : defaultStyles;

    return (
        <>
            <Link to={link}>
                <Typography
                    variant="small"
                    className="font-normal text-sm text-black text-center gap-2 py-2 pr-4 hover:text-blue-600 hover:font-semibold "
                    style={itemStyle}>
                    {title}

                </Typography>
            </Link>
        </>
    )
}
export default NavItem;
