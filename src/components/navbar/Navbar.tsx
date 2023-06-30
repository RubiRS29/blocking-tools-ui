import React, {useEffect, useState} from "react";
import {
    Navbar,
    IconButton,
    List, ListItem, Typography,
} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

import NavItem from "./NavItem"
import {BsBoxArrowInRight} from "react-icons/bs";

const itemLinks = [
    {
        id:'dashboard',
        link: "/dashboard",
        tittle: "Dashboard"
    }, 
    {
        id:'ar_request',
        link: "/requestApproval",
        tittle: "Approve/Reject request"
    },
    {
        id:'n_blocking',
        link: "/blockingRequest",
        tittle: "New Blocking"
    },
    {
        id:'mass_delete',
        link: "/massDelete",
        tittle: "New Mass Delete"
    },
    {
        id:'re_store',
        link: "/refreshStore",
        tittle: "New Refresh Store"
    },
    {
        id:'c_store',
        link: "/cloneStore",
        tittle: "New Clone Store"
    },
    {
        id:'report',
        link: "/report",
        tittle: "Report"
    }

]

function NavList() {
    return (
        <List className="lg:mt-0 lg:mb-0 md:flex-row p-1">

            {itemLinks.map(item => (
                <NavItem navProps={item} key={item.id} />
            ))}


            <Typography
                href={"#"}
                variant="small"
                color="blue-gray"
                className="font-normal text-black text-sm">
                <ListItem className="flex items-center gap-1 py-2 pr-4">
                    <BsBoxArrowInRight />
                    {11083087}
                </ListItem>
            </Typography>
        </List>
    );
}
function NavListBurger() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 flex-col lg:p-1 ">
            {itemLinks.map(item => (
                <NavItem navProps={item} key={item.id} />
            ))}

            <Typography
                href={"#"}
                variant="small"
                color="blue-gray"
                className="font-normal text-black text-sm">
                <ListItem className="flex items-center gap-2 py-1 pr-3">
                    <BsBoxArrowInRight />
                    {11083087}
                </ListItem>
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

