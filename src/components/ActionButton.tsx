import React, {ReactNode} from "react";
import {Button} from "@material-tailwind/react";
interface ButtonExcelProps {
    title: string;
    color?:string;
    colorHover?:string;
    icon?: ReactNode;
    size?:String;
    action?: () => void;
}
const ActionButton : React.FC<ButtonExcelProps> =
    ({title, action, color="bg-blue-900",colorHover="hover:bg-blue-800", icon, size="w-40 h-9 " }
         : ButtonExcelProps) => {
    return (
        <Button onClick={action} className={`flex items-center justify-center gap-2 ${size} px-4 py-2 ${color} ${colorHover} text-white text-xs font-medium rounded-md`} >
            {icon}
            {title}
        </Button>
    )

}
export default ActionButton;
