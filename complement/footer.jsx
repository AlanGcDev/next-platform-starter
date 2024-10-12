import Link from 'next/link';
export function Footer() {
    return (
        <footer className="">
            <div className="info-footer">
                <div className="redes">
                    
                </div>
                <div className="terms">
                    <Link href="/terminos" className="link">
                        Términos y condiciones
                    </Link>
                    <Link href="/cookies" className="link">
                        Política de cookies
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
};