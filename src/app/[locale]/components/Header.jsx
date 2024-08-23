"use client"

import { useTranslations } from 'next-intl'

import { Link, usePathname, useRouter } from '@/navigation'

import { navMenu } from '@/app/lib/constants'

function Header({ locale }) {

    const t = useTranslations("menu")
    return (
        <nav className='bg-white shadow-md'>
            <div className='max-w-7xl mx-auto py-8 flex items-center justify-between'>
                <div className='flex gap-4'>
                    {navMenu.map(({ id, title, path }) => (
                        <Link key={id} href={`${path}`}>{t(title)}</Link>
                    ))}
                </div>

                <LanguageSwitcher locale={locale} />
            </div>
        </nav>
    )
}

export default Header

const LanguageSwitcher = ({ locale }) => {

    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (lang) => {
        lang === 'ka' ? router.replace(pathname, { locale: 'ka' }) : router.replace(pathname, { locale: 'en' })
    }

    return (
        <div className="flex gap-2 items-center font-firaGo">
            {locale === 'ka' ? (
                <>
                    <div className="switch justify-end" onClick={() => handleLanguageChange("en")}>
                        <div className="switch-circle"></div>
                    </div>
                    <button onClick={() => handleLanguageChange("en")}>English</button>
                </>
            ) : (
                <>
                    <div className="switch justify-start" onClick={() => handleLanguageChange("ka")}>
                        <div className="switch-circle"></div>
                    </div>
                    <button onClick={() => handleLanguageChange("ka")}>ქართული</button>
                </>
            )}
        </div>
    )
}