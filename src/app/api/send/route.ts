import { Resend } from 'resend';
import {NextResponse} from "next/server";
import {EmailTemplate} from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.debug({req})
  try {
    const data = await resend.emails.send({
      from: 'davidecarizzoni@gmail.com',
      to: 'davidecarizzoni@gmail.com',
      subject: 'Hello world',
      text: 'ciao',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.debug({error})
    return NextResponse.json({ error });
  }
}
