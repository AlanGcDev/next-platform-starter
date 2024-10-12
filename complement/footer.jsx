import Link from 'next/link';
import { Icon } from '@iconify/react';
export function Footer() {
    return (
        <footer>
            <div className="copyrght">
                <Link href=""> 
                    <img src="/image/infomundo.webp" alt="" />
                </Link>
                <p>�� 2022 InfoMundo. Todos los derechos reservados.</p>
            </div>
            <div className="info-footer">
                <div className="redes">
                    <Link href="" >
                    <Icon icon="ic:baseline-facebook" />
                    </Link>
                    <Link href="" >
                    <Icon icon="mdi:instagram" />
                    </Link>
                    <Link href="" >
                    <Icon icon="prime:twitter" />
                    </Link>
                    <Link href="" >
                    <Icon icon="mdi:youtube" />
                    </Link>
                    <Link href="" >
                    <Icon icon="ic:baseline-tiktok" />
                    </Link>
                </div>
                <div className="terms">
                    <Link href="/terminos" className="link">
                        Términos condiciones
                    </Link>
                    <Link href="/cookies" className="link">
                        Política cookies
                    </Link>
                    <Link href="/nosotros" className="link">
                        Sobre nosotros
                    </Link>
                    <Link href="/uso-contenido" className="link">
                        Uso de contenido
                    </Link>
                    <Link href="/contacto" className="link">
                        Contacto
                    </Link>
                </div>
            </div>
        </footer>
    );
}
