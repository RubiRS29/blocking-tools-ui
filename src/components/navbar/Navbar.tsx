import React, {useEffect, useState} from "react";
import {
    Navbar,
    IconButton,
    List, ListItem, Typography,
} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Link, useLocation, useMatch, useResolvedPath} from "react-router-dom"

import {BsBoxArrowInRight} from "react-icons/bs";
import NavItem from "./NavItem";

const itemLinks = [
    {
        id:'dashboard',
        link: "/dashboard",
        title: "Dashboard"
    }, 
    {
        id:'ar_request',
        link: "/requestApproval",
        title: "Approve/Reject request"
    },
    {
        id:'n_blocking',
        link: "/blockingRequest",
        title: "New Blocking"
    },
    {
        id:'mass_delete',
        link: "/massDelete",
        title: "New Mass Delete"
    },
    {
        id:'re_store',
        link: "/refreshStore",
        title: "New Refresh Store"
    },
    {
        id:'c_store',
        link: "/cloneStore",
        title: "New Clone Store"
    },
    {
        id:'report',
        link: "/report",
        title: "Report"
    }

]

function NavList() {
    return (
        <List className="lg:mt-0 lg:mb-0 md:flex-row p-1">

            {itemLinks.map(item => (
                <NavItem link={item.link} title={item.title} key={item.id} />
            ))}


            <Typography
                variant="small"
                color="blue-gray"
                className="font-normal text-black text-sm flex items-center gap-2 py-1 pr-3">
                <BsBoxArrowInRight />
                {11083087}
            </Typography>
        </List>
    );
}
function NavListBurger() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 flex-col lg:p-1 ">
            {itemLinks.map(item => (
                <NavItem link={item.link} title={item.title} key={item.id} />
            ))}

            <Typography
                variant="small"
                color="blue-gray"
                className="font-normal text-black text-sm flex items-center gap-2 py-1 pr-3">
                <BsBoxArrowInRight />
                {11083087}

            </Typography>
        </List>
    );
}

export default function NavbarMain() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpenNav(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (openNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [openNav]);


    return (
        <Navbar className={`w-auto px-2 py-2 bg-slate-50`}>

            <div className="flex items-center justify-between text-blue-gray-900">
                <img className="block h-8 w-auto sm:hidden" src="/small_logo_autozone.png" alt="Autozone" />
                <img className="hidden h-4 w-30 sm:block" src="/logo_autozone.png" alt="Autozone" />

                <div className='hidden md:block'>
                    <NavList />
                </div>

                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="md:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            <div className={`${openNav ? '' : 'hidden'} `}>
                <NavListBurger />
            </div>


        </Navbar>
    );
}

