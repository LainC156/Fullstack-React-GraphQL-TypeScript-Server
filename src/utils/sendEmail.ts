import nodemailer from 'nodemailer'

export async function sendEmail(to: string, text: string) {

    let testAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })

    let info = await transporter.sendMail({
        from: '"Giovanni Trejo" <foo@example.com>',
        to,
        subject: "Change password",
        text,
    })

    console.log("message sent: %s", info.messageId)
    console.log("preview url: %s", nodemailer.getTestMessageUrl(info))
}