import { ListItem, Typography } from "@material-tailwind/react";

function NavItem({ navProps }) {

    return (
        <>

            <Typography
                as="a"
                href={navProps.href}
                variant="small"
                color="blue-gray"
                className="font-normal">
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    <CubeTransparentIcon className="h-[18px] w-[18px]" />
                    {navProps.tittle}
                </ListItem>

            </Typography>
        </>


    )

}

export default NavItem;