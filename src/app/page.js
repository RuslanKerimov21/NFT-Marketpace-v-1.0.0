import { CategoryList, CreatorList, HomeItWorksList, NftCard, TrendingList } from "@/components";
export default function Home() {
  let LIST = [];
  return (
    <main>
      <section className="offer section">
        <div className="container">
          <div className="offer-inner">
            <div className="offer-left">
              <h1>Discover digital art & Collect NFTs</h1>
              <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
              <button className="button">
                <img src="/rocket.svg" alt="rocket" />
                Get Started
              </button>
              <ul className="offer-list_promo">
                <li className="promo-item">
                  <span className="promo-item_num">240k+</span>
                  <span className="promo-item_text">Total Sale</span>
                </li>
                <li className="promo-item">
                  <span className="promo-item_num">100k+</span>
                  <span className="promo-item_text">Auctions</span>
                </li>
                <li className="promo-item">
                  <span className="promo-item_num">240k+</span>
                  <span className="promo-item_text">Artists</span>
                </li>
              </ul>
            </div>
            <div className="offer-right">
              <div className="offer-box">
                <div className="offer-box_image">
                  <img src="/image/boxcover.png" alt="box-cover" />
                </div>
                <div className="offer-box_info">
                  <span className="box-text">Space Walking</span>
                  <div className="nft-profile">
                    <div className="nft-porifle_avatar">
                      <img src="/image/avatar.png" alt="avatar" />
                    </div>
                    <div className="nft-profile_name">Animakid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tranding section">
        <div className="container">
          <h2 className="section-title">Trending Collection</h2>
          <p className="section-description">Checkout our weekly updated trending collection.</p>
          <TrendingList list={LIST} />
        </div>
      </section>
      <section className="top section">
        <div className="container">
          <div className="section-header">
            <div className="section-header_info">
              <h2 className="section-title">Top creators</h2>
              <p className="section-description">Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <button className="more">
              <img src="/rocket_blue.svg" alt="blue" />
              View Rankings
            </button>
          </div>
          <CreatorList />
        </div>
      </section>
      <section className="category section">
        <div className="container">
          <h2 className="section-title">Browse Categories</h2>
          <CategoryList />
        </div>
      </section>
      <section className="nft-list section">
        <div className="container">
          <div className="section-header">
            <div class="section-header_info">
              <h2 class="section-title">Discover More NFTss</h2>
              <p class="section-description">Explore new trending NFTs</p>
            </div>
            <button class="more">
              <img src="/view.svg" alt="view" />
              See All
            </button>
          </div>
          <ul className="nft-lists">
            <NftCard />
            <NftCard />
            <NftCard />
          </ul>
        </div>
      </section>
      <section className="home-banner"></section>
      <section className="home-it_works section">
        <div className="container">
          <div class="section-header_info">
            <h2 class="section-title">How it works</h2>
            <p class="section-description">Find out how to get started</p>
          </div>
          <HomeItWorksList />
          <div className="form-subscribe_inner">
            <div className="form-subscirebe_left">
              <img src="/image/subsribe_image.png" alt="subscribe_image" />
            </div>
            <div className="form-subscribe_right">
              <h3 className="form-subscribe_title">Join our weekly <br /> digest</h3>
              <p className="form-subscribe_description">Get exclusive promotions & updates straight to your inbox.</p>
              <form className="form-subscribe">
                <input type="text" placeholder="Enter your email here"/>
                <button className="form-subscribe_button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
