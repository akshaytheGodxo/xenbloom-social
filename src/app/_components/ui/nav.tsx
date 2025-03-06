import logo from 'public/cb-green.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="h-12 flex items-center justify-between px-4  ">
            <div className='pl-16'>
                <Image src={logo} alt="Logo" width={50} height={50} />
            </div>
            <div className='pr-16'>
                <ul className="flex space-x-14">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
