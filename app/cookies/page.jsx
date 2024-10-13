import { Icon } from '@iconify/react';
import { Ads } from 'components/ads';
import Link from 'next/link';
export default function Page() {
    return (

        <div className="container-terms">
            <div className="content-terms">
                <h1>Política de Cookies <Icon icon="fluent:cookies-16-filled" /></h1>
                <section>
        <h2>1. ¿Qué son las Cookies?</h2>
        <p>Las cookies son archivos pequeños de texto que se almacenan en su dispositivo (computadora, tablet o teléfono móvil) cuando visita un sitio web. Estos archivos permiten que el sitio web reconozca su dispositivo y recuerde cierta información sobre sus preferencias o acciones anteriores, facilitando una mejor experiencia de usuario.</p>
    </section>

    <section>
        <h2>2. Uso de Cookies en InfoMundo</h2>
        <p>En <strong>InfoMundo</strong>, utilizamos cookies para mejorar su experiencia de navegación, entender cómo interactúa con nuestro sitio y para recordar sus preferencias en futuras visitas. También utilizamos cookies para fines analíticos y de marketing, así como para personalizar el contenido que le mostramos.</p>
    </section>

    <section>
        <h2>3. Tipos de Cookies que Utilizamos</h2>
        <p>En <strong>InfoMundo</strong>, utilizamos los siguientes tipos de cookies:</p>
        <ul>
            <li><strong>Cookies Esenciales:</strong> Son necesarias para el funcionamiento básico del sitio. Sin ellas, el sitio web no puede funcionar correctamente.</li>
            <li><strong>Cookies de Rendimiento:</strong> Nos ayudan a entender cómo los usuarios interactúan con el sitio, recopilando información de manera anónima para mejorar el rendimiento y la funcionalidad.</li>
            <li><strong>Cookies de Funcionalidad:</strong> Permiten recordar sus preferencias (por ejemplo, el idioma o la región en la que se encuentra) para ofrecerle una experiencia personalizada.</li>
            <li><strong>Cookies de Marketing:</strong> Se utilizan para mostrar anuncios relevantes para usted. También pueden ser utilizadas para limitar la cantidad de veces que ve un anuncio y ayudar a medir la efectividad de nuestras campañas publicitarias.</li>
            <li><strong>Cookies de Terceros:</strong> Algunos de nuestros socios (como Google Analytics o redes sociales) pueden utilizar sus propias cookies para ofrecer servicios como análisis estadístico o integración con redes sociales.</li>
        </ul>
    </section>

    <section>
        <h2>4. Control y Desactivación de Cookies</h2>
        <p>Usted puede controlar y/o eliminar las cookies en cualquier momento. La mayoría de los navegadores web permiten gestionar sus preferencias de cookies a través de las configuraciones. A continuación, le indicamos cómo puede deshabilitar las cookies en los navegadores más comunes:</p>
        <ul>
            <li><strong>Google Chrome:</strong> <Link href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank">Configuración de cookies en Chrome</Link></li>
            <li><strong>Mozilla Firefox:</strong> <Link href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank">Configuración de cookies en Firefox</Link></li>
            <li><strong>Safari:</strong> <Link href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank">Configuración de cookies en Safari</Link></li>
            <li><strong>Microsoft Edge:</strong> <Link href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-y-administrar-cookies-en-microsoft-edge-63947406-0401-4973-9d73-046fcfb673f7" target="_blank">Configuración de cookies en Edge</Link></li>
        </ul>
        <p>Tenga en cuenta que si desactiva las cookies, algunas funcionalidades de nuestro sitio podrían no funcionar correctamente.</p>
    </section>

    <section>
        <h2>5. Cookies de Terceros</h2>
        <p>En <strong>InfoMundo</strong>, utilizamos servicios de terceros, como Google Analytics, para ayudarnos a entender cómo los usuarios utilizan nuestro sitio web. Estos servicios pueden almacenar cookies en su dispositivo para recopilar información sobre sus actividades en nuestro sitio. No tenemos control sobre las cookies utilizadas por estos terceros, y le recomendamos revisar las políticas de cookies de dichos servicios.</p>
        <ul>
            <li><strong>Google Analytics:</strong> <Link href="https://policies.google.com/technologies/cookies?hl=es" target="_blank">Política de cookies de Google</Link></li>
            <li><strong>Redes Sociales:</strong> Nuestro sitio puede incluir botones de redes sociales que le permiten compartir contenido o interactuar con nuestras páginas en redes sociales. Estas plataformas pueden también almacenar cookies en su dispositivo.</li>
        </ul>
    </section>

    <section>
        <h2>6. Cambios en Nuestra Política de Cookies</h2>
        <p>Podemos actualizar nuestra Política de Cookies periódicamente para reflejar cambios en el uso de cookies o en las normativas aplicables. Le notificaremos de cualquier modificación publicando la nueva política en esta página. Le recomendamos revisar esta Política de manera periódica para estar informado de cualquier cambio.</p>
    </section>

    <section>
        <h2>7. Contacto</h2>
        <p>Si tiene alguna duda o inquietud sobre nuestra Política de Cookies, puede contactarnos en <Link href="/contacto">contacto@infomundo.com</Link>.</p>
    </section>
                
            </div>
        </div>
        
    );
}