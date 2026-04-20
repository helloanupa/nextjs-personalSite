import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "anupadenil@gmail.com",
      replyTo: email,
      subject: subject || "New Contact Message",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Message</h2>
            
            <div style="margin-top: 20px; line-height: 1.8;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> <span style="color: #666;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> <span style="color: #666;">${subject}</span></p>
            </div>

            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #333; font-weight: bold; margin-bottom: 10px;">Message:</p>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; color: #666; white-space: pre-wrap; word-wrap: break-word;">
                ${message}
              </div>
            </div>

            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #999;">
              <p>This message was sent from your portfolio contact form.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
