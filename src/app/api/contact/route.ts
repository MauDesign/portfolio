import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Es crucial usar variables de entorno para tus credenciales
    // y no escribirlas directamente en el código.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o cualquier otro servicio de email que uses
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // El email que recibirá el mensaje
      subject: `Nuevo mensaje de contacto de ${name}: ${subject}`,
      text: message,
      html: `<p>Has recibido un nuevo mensaje de tu portafolio:</p>
             <p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al enviar el mensaje' }, { status: 500 });
  }
}