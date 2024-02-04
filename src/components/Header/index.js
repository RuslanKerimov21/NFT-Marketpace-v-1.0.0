'use client';
import './index.css';
import Link from "next/link";
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link href={'/'} className="logo">
                        <img src="/logo.svg" alt="logo" />
                    </Link>
                    <div className="header-nav">
                        <ul className="header-list">
                            <li className="header-li">
                                <Link href={`/marketplace/`}>Marketplace</Link>
                            </li>
                            <li className="header-li">
                                <Link href={`/marketplace/`}>Rankings</Link>
                            </li>
                            <li className="header-li">
                                <Link href={`/marketplace/`}>Connect a wallet</Link>
                            </li>
                        </ul>
                        <Link href={`/signup`} className='button'>
                            <img src="/user.svg" alt="user" />
                            Sign Up
                        </Link>
                    </div>
                    <button className="burger">
                        <img src="/burger.svg" alt="burger" />
                    </button>
                </div>
            </div>
        </header>
    )
}