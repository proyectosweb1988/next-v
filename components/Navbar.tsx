
import { ActiveLink } from './ActiveLink';
import style from './NavBar.module.css';


export const NavBar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
  

  return (
    <nav className={ style['menu-container']}>
            {/* <ActiveLink text="Home" href="/"/>
            <ActiveLink text="About" href="/about"/>
            <ActiveLink text="Contact" href="/contact"/> */}

            {
              menuItems.map( item =>(
                  <ActiveLink
                    key={item.href}
                    text={item.text}
                    href={item.href}
                  />
              ))
            }

    </nav>
  )
}
