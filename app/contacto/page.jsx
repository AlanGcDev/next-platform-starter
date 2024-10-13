"use client"; 

import React, { useState } from 'react';
import { Icon } from '@iconify/react';



const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [bgColor, setBgColor] = useState(''); // Estado para el color de fondo
    const [icon, setIcon] = useState(null); // Estado para gestionar el ícono

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setLoading(false);
        if (response.ok) {
            setStatus('Mensaje enviado con éxito!');
            setBgColor('green');  // Cambia el fondo a verde
            setIcon("lets-icons:check-fill");  // Ícono de éxito
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setStatus('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
            setBgColor('red');  // Cambia el fondo a rojo
            setIcon("bxs:error");  // Ícono de error
        }

        // Temporizador para limpiar el mensaje y el color de fondo después de 3 segundos
        setTimeout(() => {
            setStatus('');
            setBgColor('');
            setIcon(null);
        }, 300000);
    };

    return (
        <div className='container-terms'>
            <div className="container-contact">
                <h1>Contacto</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="subject">Asunto:</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <div className='lable-descript'>
                        <label htmlFor="message">Descripción:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>

            <div className="alert-contact" style={{ backgroundColor: bgColor, padding: status ? '10px' : '0' }}>
                {status && (
                    <p>
                        {icon && <Icon icon={icon} className='icon-contact'/>} {/* Icono de éxito o error */}
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Contact;
