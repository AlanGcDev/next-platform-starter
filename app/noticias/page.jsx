import { Icon } from '@iconify/react';
import { Ads } from 'components/ads';
import Link from 'next/link';

export default function Page() {
    return (

        <div className="container">
            <div className="content">
                <Link href="/noticias/tecnologia/inteligencia-artificial" className="content-article">
                    <div className="content-article-img">
                        <img src="https://example.com/image.jpg" alt="Image Description" />
                    </div>
                    <div className="content-article-text">
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed nunc condimentum convallis et ac eros.</p>
                    </div>    
                </Link>
                
            </div>
            <Ads></Ads>
        </div>
        
    );
}