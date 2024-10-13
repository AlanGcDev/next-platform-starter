import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const navItems = [
    { linkText: 'Home', href: '/', icon: 'mdi:home' },
    { linkText: 'Juegos', href: '/juegos', icon: 'mdi:gamepad-variant' },
    { linkText: 'Noticias', href: '/noticias', icon: 'mdi:newspaper-variant-outline' },
    { linkText: 'Deportes', href: '/deportes', icon: 'mdi:soccer' },
    { linkText: 'Contacto', href: '/contacto', icon: 'mdi:email' },
];


export function Nav() {
    return (
        <nav className="">
            <Link href="/">
                <img src="/image/infomundo.webp" alt="InfoMundo" />
            </Link>

            {!!navItems?.length && (
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <Link
                                href={item.href}
                                
                            >
                                <Icon icon={item.icon} className="icon" />
                                <span>{item.linkText}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}