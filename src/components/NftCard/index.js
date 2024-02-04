import './index.css';
export default function NftCard({ elem }) {
    return (
        <li className="card">
            <div className="card-image">
                <img src="/image/cat_image_1.png" alt="nft-image" />
            </div>
            <div className="card-info">
                <div className="nft-title">Distant Galaxy</div>
                <div class="nft-profile">
                    <div class="nft-profile_avatar">
                        <img src="/image/avatar.png" alt="avatar" />
                    </div>
                    <div class="nft-profile_name">MrFox</div>
                </div>
                <div className="card-footer">
                    <div className="card-footer_group">
                        <span>Price</span>
                        1.63 ETH
                    </div>
                    <div className="card-footer_group">
                        <span>Highest Bid</span>
                        0.33 wETH
                    </div>
                </div>
            </div>
        </li>
    )
}