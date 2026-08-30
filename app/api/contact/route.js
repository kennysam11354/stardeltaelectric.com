import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        const { company, name, email, phone, projectType, description } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields (name, email, phone)' },
                { status: 400 }
            );
        }

        const projectTypeLabels = {
            installation: 'Commercial Installation',
            maintenance: 'Electrical Maintenance',
            consultation: 'NYC Local Law Consultation',
            emergency: 'Emergency Repair',
        };

        const projectTypeLabel = projectTypeLabels[projectType] || projectType || 'General Inquiry';
        const fromEmail = process.env.CONTACT_EMAIL_FROM || 'Star Delta Electric <kenny@stardeltaelectric.com>';
        const toEmail = process.env.CONTACT_EMAIL_TO || 'kenny@stardeltaelectric.com';
        const ccEmail = process.env.CONTACT_EMAIL_CC || 'multizerllc@gmail.com';

        const emailPayload = {
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `[Star Delta Electric] New Inquiry: ${name}${company ? ` (${company})` : ''}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
                    <div style="background-color: #0f172a; padding: 20px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
                        <h1 style="color: #f59e0b; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">STAR DELTA ELECTRIC</h1>
                        <p style="color: #cbd5e1; margin: 6px 0 0 0; font-size: 14px;">New Website Contact / Project Inquiry</p>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h2 style="font-size: 18px; color: #1e293b; border-bottom: 2px solid #f59e0b; padding-bottom: 8px; margin-bottom: 16px;">Contact Information</h2>
                        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Contact Name:</td>
                                <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company:</td>
                                <td style="padding: 8px 0; color: #0f172a;">${company || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone:</td>
                                <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Project Type:</td>
                                <td style="padding: 8px 0; color: #d97706; font-weight: 600;">${projectTypeLabel}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h2 style="font-size: 18px; color: #1e293b; border-bottom: 2px solid #f59e0b; padding-bottom: 8px; margin-bottom: 16px;">Project Description</h2>
                        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #334155; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">${description || 'No description provided.'}</div>
                    </div>

                    <div style="text-align: center; border-top: 1px solid #e2e8f0; padding-top: 16px; color: #94a3b8; font-size: 12px;">
                        <p style="margin: 0;">This email was sent from the contact form on stardeltaelectric.com.</p>
                    </div>
                </div>
            `,
        };

        if (ccEmail && ccEmail !== toEmail) {
            emailPayload.cc = [ccEmail];
        }

        const { data, error } = await resend.emails.send(emailPayload);

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error('Server error in /api/contact:', err);
        return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
    }
}
