const nodemailer = require(`nodemailer`);
const EmailTemplates = require(`email-templates`);
const path = require(`path`);

const htmlTemplates = require(`../emails`);
const {ROOT_EMAIL, ROOT_EMAIL_PASS} = require(`../configs/const.config`)

const emailTemplates = new EmailTemplates({
  message: null,
  views: {
    root: path.join(process.cwd(), `emails`)
  }
});

const transport = nodemailer.createTransport({
  service: `gmail`,
  auth: {
    user: ROOT_EMAIL,
    pass: ROOT_EMAIL_PASS
  }
});

class EmailService {
  async sendMail(userMail, action, context) {
    try {
      const infoTemplates = htmlTemplates[action];
      const html = await emailTemplates.render(infoTemplates.templateFile, {...context})

      const sender = {
        from: `[NO REPLY CAR SHOP]`,
        to: userMail,
        subject: infoTemplates.subject,
        html
      }

      return transport.sendMail(sender)
    } catch (e) {
    }
  }
}

module.exports = new EmailService();