import './index.css';
import Link from 'next/link';
export default function CategoryList({ list }) {
    return (
        <ul className="category-list">
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
            <li className="category-item">
                <Link href={`category`}>
                    <div className="category-cover">
                        <div className="category-image">
                            <img src="/image/cat_image_1.png" alt="category-image" />
                        </div>
                        <div className="category-icon">
                            <img src="/pencil.svg" alt="pencil" />
                        </div>
                    </div>
                    <div className="category-title">Art</div>
                </Link>
            </li>
        </ul>
    )

}