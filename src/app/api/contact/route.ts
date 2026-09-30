// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MESSAGE_MAX = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NAVY = "#0a1533";
const CLAY = "#F89622";

const clean = (v: unknown, max: number) =>
  typeof v === "string"
    ? v
        .replace(/[\r\n]+/g, " ")
        .trim()
        .slice(0, max)
    : "";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

type ContactData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

/** Branded HTML template. Inline styles + tables so Gmail/Outlook render it correctly. */
function renderSupportEmail(d: ContactData) {
  const fullName = escapeHtml(`${d.firstName} ${d.lastName}`);
  const email = escapeHtml(d.email);
  const phone = escapeHtml(d.phone);
  const message = escapeHtml(d.message).replace(/\n/g, "<br/>");
  const receivedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Cairo",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const replySubject = encodeURIComponent(
    "Re: your message to AmrAli United Engineering",
  );

  const row = (label: string, valueHtml: string) => `
    <tr>
      <td style="padding:10px 0;width:110px;color:#6D7A99;font-size:14px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#0b1730;font-size:15px;font-weight:600;">${valueHtml}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#eef1fc;font-family:'Segoe UI',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef1fc;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">

            <tr>
              <td style="background:${NAVY};padding:28px 32px;">
                <div style="color:${CLAY};font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">AmrAli United Engineering</div>
                <div style="color:#ffffff;font-size:24px;font-weight:700;margin-top:6px;">New contact request</div>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #E7E7E7;">
                  ${row("Name", fullName)}
                  ${row("Email", `<a href="mailto:${email}" style="color:${NAVY};text-decoration:none;">${email}</a>`)}
                  ${row("Phone", `<a href="tel:+20${phone.replace(/\s/g, "")}" style="color:${NAVY};text-decoration:none;">+20 ${phone}</a>`)}
                  ${row("Received", escapeHtml(receivedAt))}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px 8px;">
                <div style="color:#6D7A99;font-size:14px;margin-bottom:8px;">Message</div>
                <div style="background:#f6f7fb;border-left:4px solid ${CLAY};border-radius:8px;padding:16px 18px;color:#0b1730;font-size:15px;line-height:1.7;">
                  ${message}
                </div>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding:24px 32px 32px;">
                <a href="mailto:${email}?subject=${replySubject}"
                   style="display:inline-block;background:${CLAY};color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:12px;">
                  Reply to ${escapeHtml(d.firstName)}
                </a>
              </td>
            </tr>

            <tr>
              <td style="background:#f6f7fb;padding:16px 32px;color:#6D7A99;font-size:12px;text-align:center;">
                Sent automatically from the website contact form.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data: ContactData = {
    firstName: clean(body.firstName, 60),
    lastName: clean(body.lastName, 60),
    email: clean(body.email, 120),
    phone: clean(body.phone, 30),
    message:
      typeof body.message === "string"
        ? body.message.trim().slice(0, MESSAGE_MAX)
        : "",
  };

  if (
    !data.firstName ||
    !data.lastName ||
    !data.phone ||
    !data.message ||
    !EMAIL_RE.test(data.email)
  ) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD");
    return NextResponse.json(
      { error: "Server not configured" },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"AmrAli Website" <${user}>`,
      to: process.env.SUPPORT_EMAIL || user, // the support inbox
      replyTo: data.email,
      subject: `New contact request from ${data.firstName} ${data.lastName}`,
      // Plain-text fallback for clients that don't render HTML
      text: `New contact request\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: +20 ${data.phone}\n\nMessage:\n${data.message}`,
      html: renderSupportEmail(data),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
