import { Icon } from '@iconify/react';
import { Ads } from 'components/ads';
import Link from 'next/link';

export default function Page() {
    return (

        <div className="container-terms">
            <div className="content-terms">
                <h1>Nosotros <Icon icon="tdesign:usergroup" /></h1>
                <section>
        <h2>1. Declaración General</h2>
        <p>En <strong>InfoMundo</strong>, nos comprometemos a cumplir con todas las leyes aplicables, incluyendo la Ley Federal del Derecho de Autor de México. Todo el contenido publicado en esta plataforma, ya sea original o de terceros, se presenta con respeto a los derechos de autor y a las licencias bajo las cuales dicho contenido se distribuye.</p>
    </section>
    
    <section>
        <h2>2. Contenido Original y Uso de Contenido de Terceros</h2>
        <p><strong>InfoMundo</strong> publica una combinación de contenido original y contenido de terceros. En caso de contenido original, los derechos de autor pertenecen exclusivamente a los autores de los artículos. Para contenido de terceros, aseguramos que este se publique bajo los términos adecuados de licencias, como Creative Commons u otras licencias que permitan la distribución de dicho material. En caso de violación inadvertida de derechos, pedimos que nos contacte a través de <Link href="/contact">contacto@infomundo.com</Link> para atender la solicitud de inmediato.</p>
    </section>
    
    <section>
        <h2>3. Licencia de Uso para Contenido Original</h2>
        <p>A menos que se indique lo contrario, todo el contenido original publicado en <strong>InfoMundo</strong> está protegido por derechos de autor bajo la legislación mexicana y no puede ser reproducido, distribuido o transmitido sin el consentimiento previo y por escrito de los autores o del equipo de <strong>InfoMundo</strong>. Ciertos artículos pueden estar disponibles bajo licencias más permisivas, como las licencias Creative Commons, que serán claramente especificadas en cada artículo correspondiente.</p>
    </section>
    
    <section>
        <h2>4. Citación y Uso de Contenidos</h2>
        <p>Los usuarios de <strong>InfoMundo</strong> están autorizados a citar fragmentos de los artículos originales publicados en esta página web, siempre y cuando se reconozca adecuadamente la autoría y se incluya un enlace directo al artículo original en <strong>InfoMundo</strong>. Para cualquier otro uso que exceda las meras citas breves (por ejemplo, la reproducción completa de artículos), es necesario obtener la autorización previa del autor o del equipo editorial de <strong>InfoMundo</strong>.</p>
    </section>
    
    <section>
        <h2>5. Exoneración de Responsabilidad</h2>
        <p>Las opiniones expresadas en los artículos publicados en <strong>InfoMundo</strong> son exclusivamente responsabilidad de los autores y no reflejan necesariamente la posición del equipo editorial de <strong>InfoMundo</strong>. La información proporcionada en este sitio es de carácter informativo y no constituye asesoramiento legal, médico, financiero o profesional de ningún tipo. Para asesoramiento especializado, se recomienda consultar a un profesional en la materia correspondiente.</p>
    </section>
    
    <section>
        <h2>6. Notificación de Infracción de Derechos de Autor</h2>
        <p>En <strong>InfoMundo</strong>, respetamos los derechos de propiedad intelectual de terceros y estamos comprometidos con atender las solicitudes de retiro de contenido que puedan infringir estos derechos. Si considera que alguno de nuestros artículos infringe sus derechos de autor, por favor, envíenos una notificación detallada a <Link href="/contact">contacto@infomundo.com</Link> que incluya la siguiente información:</p>
        <ul>
            <li>Identificación clara del contenido protegido por derechos de autor.</li>
            <li>Descripción del material que supuestamente infringe esos derechos.</li>
            <li>Información de contacto del titular de los derechos o su representante autorizado.</li>
        </ul>
        <p>Revisaremos su solicitud con la mayor celeridad posible y, si corresponde, retiraremos el contenido.</p>
    </section>
    
    <section>
        <h2>7. Enlaces a Sitios Externos</h2>
        <p><strong>InfoMundo</strong> puede contener enlaces a sitios web externos que no están bajo nuestro control. No nos hacemos responsables por el contenido, políticas de privacidad o prácticas de estos sitios de terceros. El acceso a dichos enlaces es bajo su propio riesgo.</p>
    </section>
    
    <section>
        <h2>8. Modificación de este Aviso</h2>
        <p>Nos reservamos el derecho a modificar el presente Aviso de Uso de Contenidos en cualquier momento. Las modificaciones serán publicadas en esta página y entrarán en vigor inmediatamente después de su publicación. Se recomienda revisar este Aviso de manera periódica.</p>
    </section>
            </div>
        </div>
        
    );
}