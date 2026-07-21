import { NextResponse } from "next/server";

/**
 * Quote request handler.
 *
 * This validates the submission and returns success. To actually deliver
 * leads to the client's inbox, connect an email service here — e.g. Resend,
 * Nodemailer/SMTP or a Formspree webhook. The submission is logged to the
 * server console in the meantime so nothing is lost during setup.
 *
 * Example (Resend):
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "website@aasifdevelopers.com",
 *     to: "info@aasifdevelopers.com",
 *     subject: `New quote request — ${data.name}`,
 *     text: JSON.stringify(data, null, 2),
 *   });
 */

type QuoteBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  city?: string;
  budget?: string;
  details?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let data: QuoteBody;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const projectType = (data.projectType ?? "").trim();
  const city = (data.city ?? "").trim();
  const details = (data.details ?? "").trim();

  if (
    !name ||
    !isEmail(email) ||
    phone.replace(/\D/g, "").length < 7 ||
    !projectType ||
    !city ||
    details.length < 10
  ) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 422 }
    );
  }

  // TODO: connect an email service to deliver this to info@aasifdevelopers.com
  console.log("[quote request]", {
    name,
    email,
    phone,
    company: data.company,
    projectType,
    city,
    budget: data.budget,
    details,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
