'use client'

import {useState} from 'react';
import Sidebar from "@/app/components/Sidebar";


const testItems = [
    {
        title: 'First Field',
        callback: () => console.log('First Field callback')
    },
    {
        title: 'Second Field',
        callback: () => console.log('Second Field callback'),
        subItems: [
            {
                title: 'Second Field Submenu 1',
                callback: () => console.log('Second Field Submenu 1 callback'),
            },
            {
                title: 'Second Field Submenu 2',
                callback: () => console.log('Second Field Submenu 2 callback'),
            },
            {
                title: 'Second Field Submenu 2',
                callback: () => console.log('Second Field Submenu 3 callback'),
            }
        ]
    },
    {
        title: 'First Field',
        callback: () => console.log('First Field callback')
    },
]


export default function Home() {
    const [status, setStatus] = useState(true);

    const handleClose = () => {
      setStatus(false);
    }

    const handleOpen= () => {
        setStatus(true);
    }

    return <main>
        <button className='w-20 h-20' onClick={handleOpen}>click</button>
        <Sidebar isOpen={status} menuItems={testItems} onClose={handleClose}/>
    </main>;
}
