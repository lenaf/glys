import Link from './Link'
import MobileNav from './MobileNav'
import Logo from './Logo'
import siteData from '@/data/siteData';
import LinkAsButton from './LinkAsButton';

const Header = () => {
  return (
    <header className="bg-base-100 sticky top-0 z-10 flex items-center justify-between py-4 px-4">
      <div>
        <Link href="/" >
          <Logo className='-my-8' width={80} />
        </Link>
      </div>
      <div className='hidden sm:block'>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {siteData.routes.map((link) => (
            <Link
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
          <LinkAsButton className="btn-primary " href="https://givebutter.com/give2glys" target="_blank">Donate</LinkAsButton>
        </div>
      </div>
      <MobileNav />
    </header>
  )
}

export default Header
