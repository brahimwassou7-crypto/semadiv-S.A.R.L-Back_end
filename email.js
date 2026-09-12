import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const router = express.Router();

const NodeMailerForme = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post("/", async function (request, response) {
  const name = request.body.name;
  const lastName = request.body.lastName;
  const number = request.body.number;
  const email = request.body.email;
  const type = request.body.type;
  const message = request.body.message;

  const EmailForme = {
    to: process.env.EMAIL_ADDRESS,

    text: `
Name : ${name}

Last name : ${lastName}

Number : ${number}

Email : ${email}

Type : ${type}

Message : ${message}
        `,
  };

  try {
    await NodeMailerForme.sendMail(EmailForme);

    response.status(200).json({
      message: "message sent successfully",
    });
  } catch (error) {
    console.log(error);

    response.status(500).json({
      message: "message failed",
    });
  }
});

export default router;
