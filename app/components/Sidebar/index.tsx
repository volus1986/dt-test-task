import {MainMenu, MenuItem} from "@/app/components/Sidebar/components/MainMenu";

type SidebarProps = {
    isOpen: boolean;
    menuItems: MenuItem[];
    onClose: () => void;
};

export default function Sidebar({isOpen=true, menuItems=[], onClose}: SidebarProps) {
    return <>
        <div
            className={`top-0 w-full h-full bg-gray-900 opacity-50 absolute ${isOpen ? '' : 'hidden'}`}
            onClick={onClose}
        ></div>
        <MainMenu isOpen={isOpen} menuItems={menuItems}/>
    </>
}