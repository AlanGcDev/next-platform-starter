import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: 'craftcoin.web@gmail.com',
        subject: subject,
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Correo enviado', { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return new Response('Error al enviar el correo', { status: 500 });
    }
}
