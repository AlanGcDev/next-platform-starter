import { Icon } from '@iconify/react';
import { Ads } from 'components/ads';
import Link from 'next/link';

export default function Page() {
    return (

        <div className="container-terms">
            <div className="content-terms">
                <h1>Uso de Contenido <Icon icon="stash:private-content-solid" /></h1>
                <section>
        <h2>1. Propiedad Intelectual</h2>
        <p>Todo el contenido publicado en <strong>InfoMundo</strong>, incluidos, entre otros, textos, imágenes, gráficos, videos, logotipos y diseños, está protegido por derechos de autor, marcas registradas y otras leyes de propiedad intelectual vigentes en los Estados Unidos Mexicanos y a nivel internacional. A menos que se indique lo contrario, los derechos de autor y demás derechos de propiedad intelectual sobre dicho contenido pertenecen a <strong>InfoMundo</strong> o a sus respectivos autores.</p>
    </section>

    <section>
        <h2>2. Uso Permitido del Contenido</h2>
        <p>El contenido disponible en <strong>InfoMundo</strong> está destinado únicamente para uso personal y no comercial. Está permitido descargar, visualizar e imprimir partes del contenido, siempre que:</p>
        <ul>
            <li>El uso sea exclusivamente para fines informativos y personales.</li>
            <li>No modifique o altere el contenido de ninguna manera.</li>
            <li>Incluya una atribución clara a <strong>InfoMundo</strong> y un enlace directo a la fuente original, cuando sea aplicable.</li>
        </ul>
        <p>Queda estrictamente prohibida la reproducción, distribución, transmisión, venta, cesión o cualquier otra forma de explotación comercial del contenido sin el consentimiento previo y por escrito de <strong>InfoMundo</strong> o del titular de los derechos correspondientes.</p>
    </section>

    <section>
        <h2>3. Modificación del Contenido</h2>
        <p>No se permite la modificación, transformación o creación de obras derivadas del contenido de <strong>InfoMundo</strong> sin la autorización expresa y por escrito del titular de los derechos de autor. Cualquier uso del contenido en forma modificada, sin autorización, puede considerarse una infracción de derechos de autor y estará sujeto a las sanciones previstas en las leyes aplicables.</p>
    </section>

    <section>
        <h2>4. Uso de Contenido de Terceros</h2>
        <p>En algunos casos, <strong>InfoMundo</strong> puede publicar contenido de terceros, siempre respetando las licencias bajo las cuales dicho contenido se distribuye. Este contenido puede estar protegido por licencias como <strong>Creative Commons</strong> o cualquier otro tipo de licencia permisiva. Si el contenido de terceros está protegido por derechos de autor, será necesario obtener el permiso del titular de los derechos antes de utilizarlo fuera del sitio web.</p>
        <p>Si encuentra algún contenido que infrinja derechos de autor, por favor, notifíquenos de inmediato a través de <Link href="/contacto">contacto@infomundo.com</Link>, y tomaremos las medidas apropiadas para retirarlo.</p>
    </section>

    <section>
        <h2>5. Exención de Responsabilidad</h2>
        <p>El contenido proporcionado en <strong>InfoMundo</strong> es de carácter informativo y no constituye asesoramiento legal, financiero, médico o profesional. Aunque hacemos todo lo posible por asegurar la precisión de la información publicada, <strong>InfoMundo</strong> no garantiza la exactitud, integridad o actualidad de la información. El uso del contenido es bajo su propio riesgo, y <strong>InfoMundo</strong> no será responsable por ningún daño directo o indirecto derivado del uso de la información publicada en el sitio.</p>
    </section>

    <section>
        <h2>6. Enlaces a Otros Sitios Web</h2>
        <p><strong>InfoMundo</strong> puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia y no constituyen un respaldo o aprobación de los sitios enlazados. <strong>InfoMundo</strong> no tiene control sobre el contenido, las políticas de privacidad o las prácticas de dichos sitios web, y no asume ninguna responsabilidad por los mismos.</p>
    </section>

    <section>
        <h2>7. Solicitud de Permisos</h2>
        <p>Para obtener permiso para reproducir, distribuir o utilizar cualquier parte del contenido de <strong>InfoMundo</strong> de manera que exceda el uso personal y no comercial, puede contactarnos a través de <Link href="/contacto">contacto@infomundo.com</Link>. Todas las solicitudes de permisos serán evaluadas individualmente.</p>
    </section>

    <section>
        <h2>8. Cambios en la Política de Uso de Contenido</h2>
        <p><strong>InfoMundo</strong> se reserva el derecho de modificar esta política en cualquier momento sin previo aviso. Cualquier cambio en la Política de Uso de Contenido será publicado en esta página y entrará en vigor de inmediato. Se recomienda a los usuarios revisar periódicamente esta página para estar al tanto de cualquier actualización.</p>
    </section>

    <section>
        <h2>9. Contacto</h2>
        <p>Si tiene alguna pregunta o comentario sobre esta Política de Uso de Contenido, puede contactarnos en <Link href="/contacto">contacto@infomundo.com</Link>.</p>
    </section>
            </div>
        </div>
        
    );
}