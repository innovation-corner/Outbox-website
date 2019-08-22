const EmailService = require("../Services/EmailService");
module.exports = {
  async registrationEmail(data) {
    try {
      data.subject = "Welcome To Outbox";
      data.text = "We are glad to have you on board";
      data.html = `<p> Please click this <a href="useoutbox.com/complete-registraion/${
        data.token
      }">link</a> 
        to complete you registration</p>`;
      EmailService.sendMail(data);
    } catch (err) {
      throw new Error(err);
    }
  },

  async notifyNewUser(data) {
    try {
      data.subject = "You have been Invited";
      data.text = "We are glad to have you on board";
      data.html = `<p> You've been invited by ${data.name} to use outbox</p>
        <p> Please click this <a href="useoutbox.com/login">link</a> 
        to login</p>
        <p> Your login details are email:${data.email}, password:${
        data.password
      }</p>
        `;
      EmailService.sendMail(data);
      console.log(data)
    } catch (error) {
      throw new Error(err);
    }
  }
};
