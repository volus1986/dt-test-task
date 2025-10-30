export type submenuItem= {
    title: string,
    callback?: ()=>void,
}

type MainMenuItemProps = {
    isOpen: boolean
    menuSubItems?: submenuItem[];
};


export function Submenu({isOpen = true, menuSubItems = []}: MainMenuItemProps) {
    if (!isOpen) return;

    const menuItemsEls = menuSubItems?.map((menuItem: submenuItem, index: number) => {
        return <button
            key={index}
            className='w-full h-12 border'
            onClick={menuItem.callback}
        >{menuItem.title}</button>
    })


    return <div className={`w-auto bg-amber-500 grid`}>
        {menuItemsEls}
    </div>
}
