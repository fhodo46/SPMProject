/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Main Menu',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Meetings', icon: 'pi pi-fw pi-briefcase', to: '/meetings' },
                { label: 'Schedule', icon: 'pi pi-fw pi-calendar', to: '/schedule' },
                { label: 'Clients', icon: 'pi pi-fw pi-users', to: '/clients' },
                { label: 'Notifications', icon: 'pi pi-fw pi-bell', to: '/notifications' }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
