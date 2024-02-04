'use client';
import './index.css';
export default function TrendingList({ list }) {
    return (
        <ul className="trending-list">
            <li className="trending-item">
                <div className="trending-top">
                    <div className="trending-image">
                        <img src="/image/image_1.png" alt="tranding" />
                    </div>
                    <div className="trending-gallerey">
                        <div className="tranding-gallerey_item">
                            <img src="/image/image_4.png" alt="gallerey" />
                        </div>
                        <div className="tranding-gallerey_item">
                            <img src="/image/image_5.png" alt="gallerey" />
                        </div>
                        <div className="tranding-gallerey_item">
                            <span>1025+</span>
                        </div>
                    </div>
                </div>
                <div className="trending-footer">
                    <span>DSGN Animals</span>
                    <div className="nft-profile">
                        <div className="nft-profile_avatar">
                            <img src="/image/avatar.png" alt="avatar" />
                        </div>
                        <div class="nft-profile_name">MrFox</div>
                    </div>
                </div>
            </li>
            <li className="trending-item">
                <div className="trending-top">
                    <div className="trending-image">
                        <img src="/image/image_2.png" alt="tranding" />
                    </div>
                    <div className="trending-gallerey">
                        <div className="tranding-gallerey_item">
                            <img src="/image/image_2.png" alt="gallerey" />
                        </div>
                        <div className="tranding-gallerey_item">
                            <img src="/image/image_2.png" alt="gallerey" />
                        </div>
                        <div className="tranding-gallerey_item">
                            <span>1025+</span>
                        </div>
                    </div>
                </div>
                <div className="trending-footer">
                    <span>Magic Mushroomss</span>
                    <div className="nft-profile">
                        <div className="nft-profile_avatar">
                            <img src="/image/avatar_2.png" alt="avatar" />
                        </div>
                        <div class="nft-profile_name">Shroomie</div>
                    </div>
                </div>
            </li>
            <li className="trending-item">
                <div className="trending-top">
                    <div className="trending-image">
                        <img src="/image/image_3.png" alt="tranding" />
                    </div>
                    <div className="trending-gallerey">
                        <div className="tranding-gallerey_item">
                            <img src="/image/image_3.png" alt="gallerey" />
                        </div>
                        <div className="tranding-gallerey_item">
                            <img src="/image/image_3.png" alt="gallerey" />
                        </div>
                        <div className="tranding-gallerey_item">
                            <span>1025+</span>
                        </div>
                    </div>
                </div>
                <div className="trending-footer">
                    <span>Disco Machines</span>
                    <div className="nft-profile">
                        <div className="nft-profile_avatar">
                            <img src="/image/avatar_3.png" alt="avatar" />
                        </div>
                        <div class="nft-profile_name">BeKind2Robots</div>
                    </div>
                </div>
            </li>
        </ul>
    )
}