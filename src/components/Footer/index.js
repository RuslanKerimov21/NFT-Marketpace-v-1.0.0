import './index.css';
import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-wrap">
                        <div className="footer-logo">
                            <Link href="/" className='logo'>
                                <img src="/logo.svg" alt="logo" />
                            </Link>
                            NFT marketplace UI created <br /> with Anima for Figma.
                        </div>
                        <div className="comunity-links">
                            Join our community
                            <ul className="comunity-link_list">
                                <li className="comunity-link_item">
                                    <Link href={`/discord`}>
                                        <img src="/discord.svg" alt="discord" />
                                    </Link>
                                </li>
                                <li className="comunity-link_item">
                                    <Link href={`/yotube`}>
                                        <img src="/yotube.svg" alt="yotube" />
                                    </Link>
                                </li>
                                <li className="comunity-link_item">
                                    <Link href={`/tweeter`}>
                                        <img src="/tweeter.svg" alt="tweeter" />
                                    </Link>
                                </li>
                                <li className="comunity-link_item">
                                    <Link href={`/instagramm`}>
                                        <img src="/instagramm.svg" alt="instagramm" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-wrap">
                        <div className="footer-wrap_title">Explore</div>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link href="/">Marketplace</Link>
                            </li>
                            <li className="footer-item">
                                <Link href="/">Rankings</Link>
                            </li>
                            <li className="footer-item">
                                <Link href="/">Connect a wallet</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-wrap">
                        <div className="footer-wrap_title">Join our weekly digest</div>
                        <div className="footer-form_subscribe">
                            <div className="footer-form_subscribe-title">Join our weekly digest</div>
                            <div className="footer-form_subscribe-description">Get exclusive promotions & updates <br /> straight to your inbox.</div>
                            <form class="form-subscribe">
                                <input type="text" placeholder="Enter your email here" />
                                <button class="form-subscribe_button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-inner">
                    Ⓒ NFT Market. Use this template freely.
                </div>
            </div>
        </footer>
    )
}