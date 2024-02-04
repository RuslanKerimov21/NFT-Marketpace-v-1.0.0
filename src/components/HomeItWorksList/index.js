import './index.css';
import React from 'react';
export default function HomeItWorksList({ list }) {
    return (
        <ul className="home-it_works-list">
            <li className="it-works_item">
                <div className="home-it_works-image">
                    <img src="/icon_1.svg" alt="it-works" />
                </div>
                <div className="home-it_works_title">Setup Your wallet</div>
                <div className="home-it_works_descr">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</div>
            </li>
            <li className="it-works_item">
                <div className="home-it_works-image">
                    <img src="/icon_2.svg" alt="it-works" />
                </div>
                <div className="home-it_works_title">Create Collectiont</div>
                <div className="home-it_works_descr">Upload your work and setup your collection. Add a description, social links and floor price.</div>
            </li>
            <li className="it-works_item">
                <div className="home-it_works-image">
                    <img src="/icon_3.svg" alt="it-works" />
                </div>
                <div className="home-it_works_title">Start Earning</div>
                <div className="home-it_works_descr">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</div>
            </li>
        </ul>
    )
}