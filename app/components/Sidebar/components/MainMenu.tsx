import {useEffect, useState} from 'react';

import {MainMenuItem, submenuItems} from "@/app/components/Sidebar/components/MainMenuItem";

export type MenuItem = {
    title: string;
    callback?: ()=>void;
    subItems?: submenuItems[];
};

export type MenuProps = {
    isOpen: boolean,
    menuItems?: MenuItem[]
}

export function MainMenu({isOpen = true, menuItems = []}: MenuProps) {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        setOpenIndex(null);
    }, [isOpen])

    const handleMenuClick = (index) => {
        if(menuItems && menuItems[index].subItems?.length) {
            if(index === openIndex) setOpenIndex(null);
            else setOpenIndex(index);
        }

        menuItems?.[index].callback?.();
    }

    const items = menuItems?.map((menuItem: MenuItem, index) => {
        return <div key={index} className='w-full mb-2 cursor-pointer'>
            <MainMenuItem
                index={index}
                changeOpen={handleMenuClick}
                isOpen={openIndex === index}
                title={menuItem.title}
                menuSubItems={menuItem.subItems}
            />
        </div>
    })

    return <div className={`
        top-0 fixed min-w-64 h-full bg-gray-600 opacity-100 right-0
        transition-all duration-300 ${isOpen ? "" : "translate-x-1/1"}  
    `}>
        {items}
    </div>

}
