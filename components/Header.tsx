import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
        <div className='container header-wrapper'>
            <Link href='/'>
            <Image src='/assets/images/logo.png' alt='logo' width={140} height={32} className='w-full h-8 cursor-pointer'/>
            </Link>
            
            <nav className='hidden sm:block'>
                <NavItems />
            </nav>
            <UserDropdown />
        </div>
    </header>
  )
}

export default Header