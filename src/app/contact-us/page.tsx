import classes from "./contact.module.css";

export default function ContactUs() {
  return (
    <div className={classes.ContactUsPage}>
      <div className={classes.PageName}>Contact Us</div>
      <div className={classes.contactCards}>
        <div className={classes.sendEmail}>
          <div className={classes.EmailName}>Email</div>
          <div className={classes.emailId}>
            <p>bhaktiBhandaridr@gmail.com</p>
          </div>
        </div>
        <div className={classes.Mobile}>
          <div className={classes.PhoneName}>Phone</div>
          <div className={classes.PhoneNo}>
            <p>+91 9691794836</p>
            <p>+91 8305235259</p>
          </div>
        </div>
      </div>
    </div>
  );
}
