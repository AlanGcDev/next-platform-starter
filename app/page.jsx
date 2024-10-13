import { Icon } from '@iconify/react';
import { Ads } from 'components/ads';
import Link from 'next/link';
export default function Page() {
    return (
        
        <div className="container">
            <div className="content">
                <div className="art-container">
                    <Link href="" className="art-product">
                        <div className="art-img">
                            <img src="" alt="" />
                        </div>
                        <div className="art-descript">
                            <h3>Product Title</h3>
                            <p>Product Description</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Ads></Ads>
        </div>
        
    );
}