import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			let transporter = nodemailer.createTransport({
				host: process.env.EMAIL_SERVER,
				port: 2525,
				secure: false,
				auth: {
					user: process.env.EMAIL_USERNAME,
					pass: process.env.EMAIL_PASSWORD
				}
			});
			await transporter.sendMail({
				from: 'patpatduque26@gmail.com',
				to: 'patpatduque26@gmail.com',
				subject: req.body.name,
				text: `${req.body.text} you can contact me @ ${req.body.email}`
			});
			res.send({ message: 'I received your email. I will contact you as soon as I read it 😊.' });
		} catch (error) {
			res.send({ message: 'Failed sending email, Please try again later 😊' });
		}
	} else {
		res.send({ message: 'Hello there! 😊' });
	}
};
