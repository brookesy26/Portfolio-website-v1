import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request:Request){
  try {
    const {subject, message, name, email} = await request.json()
    const user = "abrookes.dev@gmail.com"

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth:{
        user: user,
        pass: "mwceqxlyafekkxqo"
      },
    })

    const mailOptions = {
      from: user,
      to: user,
      replyTo: email,
      subject: subject,
      html: `
      <p>Name ${name}</p>
      <p>Email ${email}</p>
      <p>Name ${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({message:"email sent successfully"}, {status: 200})
    
  } catch (error) {
    return NextResponse.json({message: "failed"}, {status: 500})
  }
}