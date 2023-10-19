import React from 'react'
import classes from "./about.module.css"

const about = () => {

    return (
      <div className={classes.ContactUsPage}>
        <div className={classes.PageName}>About Us</div>
        <div className={classes.contactCards}>
          <div className={classes.sendEmail}>
            <div className={classes.EmailName}>Bhakti Bhandar</div>
            <div className={classes.emailId}>
              <p>Seller of original Narmadeshwar shivling</p>
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

export default about