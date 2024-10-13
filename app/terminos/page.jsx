import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="container-terms">
            <div className="content-terms">
                <h1>Términos y Condiciones <Icon icon="fluent:document-lock-16-filled" /></h1>
                <section>
                    <h2>1. Aceptación de los Términos</h2>
                    <p>Al acceder y utilizar el sitio web <strong>InfoMundo</strong> (en adelante, &quot;el Sitio&quot;), usted acepta cumplir y estar sujeto a los siguientes términos y condiciones (en adelante, &quot;Términos&quot;). Si no está de acuerdo con estos Términos, por favor no utilice el Sitio.</p>
                </section>

                <section>
                    <h2>2. Uso del Sitio</h2>
                    <p>El contenido de <strong>InfoMundo</strong> está destinado únicamente para fines informativos. Usted se compromete a utilizar el Sitio de manera responsable y a no realizar actividades ilegales, difamatorias, o que infrinjan los derechos de propiedad intelectual de terceros.</p>
                </section>

                <section>
                    <h2>3. Modificaciones a los Términos y al Contenido</h2>
                    <p><strong>InfoMundo</strong> se reserva el derecho de modificar, actualizar o eliminar cualquier parte de estos Términos en cualquier momento sin previo aviso. Las modificaciones serán efectivas inmediatamente después de su publicación en esta página. Es responsabilidad del usuario revisar periódicamente los Términos para estar informado sobre cualquier cambio.</p>
                    <p>Nos reservamos el derecho de modificar o eliminar el contenido del Sitio en cualquier momento sin previo aviso. No somos responsables de las consecuencias derivadas de la modificación, extracción o eliminación de contenido.</p>
                </section>

                <section>
                    <h2>4. Propiedad Intelectual</h2>
                    <p>Todo el contenido publicado en <strong>InfoMundo</strong>, incluidos textos, imágenes, gráficos, videos, logotipos, y otros materiales, está protegido por derechos de autor y otras leyes de propiedad intelectual. A menos que se indique lo contrario, los derechos de autor sobre el contenido pertenecen a <strong>InfoMundo</strong> o a sus respectivos autores.</p>
                    <p>Está prohibida la reproducción, distribución, modificación o cualquier otro uso no autorizado del contenido sin el consentimiento expreso y por escrito del titular de los derechos. Sin embargo, se permite el uso de citas breves del contenido con atribución apropiada, incluyendo un enlace a la fuente original en <strong>InfoMundo</strong>.</p>
                </section>

                <section>
                    <h2>5. Uso de Contenido por Terceros</h2>
                    <p>El contenido publicado en <strong>InfoMundo</strong> puede ser utilizado por terceros siempre y cuando se respeten los derechos de autor y se atribuya correctamente a los autores y a la fuente original. El usuario entiende que cualquier modificación o alteración del contenido extraído de este Sitio es bajo su propio riesgo y responsabilidad, y <strong>InfoMundo</strong> no se hace responsable por las versiones alteradas o modificadas del contenido original que se encuentren fuera de su plataforma.</p>
                </section>

                <section>
                    <h2>6. Limitación de Responsabilidad</h2>
                    <p><strong>InfoMundo</strong> no garantiza que el Sitio esté libre de errores, virus u otros componentes dañinos. El uso del Sitio es bajo su propio riesgo. En ningún caso, <strong>InfoMundo</strong>, sus directivos, empleados o colaboradores serán responsables por cualquier daño directo, indirecto, incidental, especial o consecuente que surja del uso o incapacidad de usar el Sitio.</p>
                </section>

                <section>
                    <h2>7. Enlaces a Sitios de Terceros</h2>
                    <p>El Sitio puede contener enlaces a otros sitios web que son propiedad de terceros o que son operados por ellos. Estos enlaces se proporcionan únicamente para su conveniencia y no implican aprobación o asociación con dichos sitios. <strong>InfoMundo</strong> no es responsable del contenido, políticas de privacidad o prácticas de los sitios enlazados.</p>
                </section>

                <section>
                    <h2>8. Privacidad</h2>
                    <p>La recopilación y el uso de información personal a través de este Sitio están sujetos a nuestra <a href="">Política de Privacidad</a>, que describe cómo manejamos y protegemos su información personal.</p>
                </section>

                <section>
                    <h2>9. Comentarios y Contenido Generado por el Usuario</h2>
                    <p>Si el Sitio permite la publicación de comentarios u otro contenido generado por el usuario, usted acepta que no publicará contenido ilegal, difamatorio, abusivo, obsceno o que infrinja los derechos de terceros. <strong>InfoMundo</strong> se reserva el derecho de eliminar cualquier contenido generado por los usuarios que considere inapropiado.</p>
                </section>

                <section>
                    <h2>10. Terminación</h2>
                    <p>Nos reservamos el derecho de suspender o terminar su acceso al Sitio en cualquier momento y por cualquier motivo, incluyendo, sin limitación, si usted incumple estos Términos.</p>
                </section>

                <section>
                    <h2>11. Ley Aplicable</h2>
                    <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos. Cualquier controversia derivada de estos Términos será resuelta exclusivamente por los tribunales competentes en México.</p>
                </section>

                <section>
                    <h2>12. Contacto</h2>
                    <p>Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de <a href="mailto:contacto@infomundo.com">contacto@infomundo.com</a>.</p>
                </section>
            </div>
        </div>
    );
}
