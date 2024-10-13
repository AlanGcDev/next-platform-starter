"use client"; // Asegúrate de ejecutar solo en el cliente

import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic'; // Para carga dinámica del componente Ads
import Link from 'next/link';

// Cargar el componente Ads sin SSR
const Ads = dynamic(() => import('components/ads'), { ssr: false });

export default function Page() {
    return (
        <div className="container">
            <div className="content">
                <Link href="/noticias/tecnologia/inteligencia-artificial" className="content-article">
                    <div className="content-article-img">
                        {/* Usa imágenes optimizadas con Next.js */}
                        <img 
                            src="https://example.com/image.jpg" 
                            alt="Image Description" 
                            loading="lazy" // Carga diferida para mejorar el rendimiento
                        />
                    </div>
                    <div className="content-article-text">
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed nunc condimentum convallis et ac eros.</p>
                    </div>    
                </Link>
            </div>

            {/* Renderizar anuncios dinámicamente */}
            <Ads />
        </div>
    );
}
