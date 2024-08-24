"use client"

import Image from 'next/image'

import { useTranslations } from 'next-intl'

import { Link, usePathname, useRouter } from '@/navigation'

import { navMenu } from '@/app/lib/constants'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Header({ locale }) {
    return (
        <nav className='shadow-md bg-white relative'>
            <div className='max-w-7xl mx-auto py-6 px-5'>

                <NavbarDesktop locale={locale} />

                <NavbarMobile locale={locale} />

            </div>
        </nav>
    )
}

export default Header

const NavbarDesktop = ({locale}) => {

    const t = useTranslations("menu")

    const pathname = usePathname()

    return (
        <div className='hidden lg:flex lg:items-center lg:justify-between'>

            <div className='flex items-center gap-4'>
                <Image src={'/iliauni-logo_eng.png'} width={70} height={70} alt='ISU' />
                {navMenu.map(({ id, title, path }) => (
                    <Link key={id} href={`${path}`} className={`${pathname === path ? 'active' : ''}`}>{t(title)}</Link>
                ))}
            </div>
            
            <LanguageSwitcher locale={locale} />

        </div>
    )
}

const NavbarMobile = ({locale}) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen((prevState) => !prevState)

    const t = useTranslations("menu")

    const router = useRouter()

    const pathname = usePathname()

    const navigate = (path) => {
        router.replace(path)
        setMenuOpen(false)
    }

    return (
        <div className='relative w-full lg:hidden'>

            <div className='flex items-center justify-between'>
                <button onClick={toggleMenu}>
                    {menuOpen ? <X width={35} height={35} /> : <Menu width={35} height={35} />}
                </button>

                <LanguageSwitcher locale={locale} />
            </div>

            {menuOpen && (
                <div className='flex flex-col gap-4 items-start pt-8 bg-white'>
                    {navMenu.map(({ id, title, path }) => (
                        <button key={id} onClick={() => navigate(path)} className={`${pathname === path ? 'active' : ''}`}>{t(title)}</button>
                    ))}
                </div>
            )}

        </div>
    )
}

const LanguageSwitcher = ({ locale }) => {

    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (lang) => {
        lang === 'ka' ? router.replace(pathname, { locale: 'ka' }) : router.replace(pathname, { locale: 'en' })
    }

    return (
        <div className="flex gap-2 items-center">
            {locale === 'ka' ? (
                <button onClick={() => handleLanguageChange("en")}>English</button>
            ) : (
                <button onClick={() => handleLanguageChange("ka")}>ქართული</button>
            )}
        </div>
    )
}