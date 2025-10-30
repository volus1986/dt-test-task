import {Submenu, submenuItem} from "@/app/components/Sidebar/components/Submenu";

export type submenuItems = submenuItem[]

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

        return isOpen ? '-' : '+'
    }

    const titleEl = <button
        className='w-full h-12 flex justify-between p-1 bg-amber-300'
        onClick={handleSwitchOpen}
    >
        <div className="grow flex items-center justify-center">{title}</div>
        <div className="flex items-center">{icon()}</div>
    </button>

    const submenuEl = !menuSubItems?.length
        ? null
        : <Submenu isOpen={isOpen} menuSubItems={menuSubItems}/>

    return <div>
        {titleEl}
        {submenuEl}
    </div>
}
