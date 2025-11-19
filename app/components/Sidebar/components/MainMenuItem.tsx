import {Submenu, submenuItem} from "@/app/components/Sidebar/components/Submenu";
import {arrowIcon} from "@/app/components/Sidebar/components/icons/arrow";

export type submenuItems = submenuItem

type MainMenuItemProps = {
    title: string,
    isOpen: boolean,
    menuSubItems?: submenuItems[],
    changeOpen: (openIndex: number) => void,
    index: number
};


export function MainMenuItem({title, isOpen = true, menuSubItems = [], changeOpen, index}: MainMenuItemProps) {

    const handleSwitchOpen = () => {
        changeOpen(index)
    }
    const icon = () => {
        if (!menuSubItems?.length) return null;

        return <span className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>{arrowIcon}</span>
    }

    const titleEl = <button
        className={`w-full h-12 flex justify-between px-4 py-1 ${isOpen ? 'bg-[#555555]' : 'bg-[#333333]'}`}
        onClick={handleSwitchOpen}
    >
        <div className="grow flex items-center text-[#E5E5E5]">{title}</div>
        <div className="flex items-center text-[#E5E5E5]">{icon()}</div>
    </button>

    const submenuEl = !menuSubItems?.length
        ? null
        : <Submenu isOpen={isOpen} menuSubItems={menuSubItems}/>

    return <div>
        {titleEl}
        {submenuEl}
    </div>
}
