import "../assets/scss/header.scss";
import "../assets/scss/privacypolicy.scss";

import { Link } from "react-router-dom";
import React from "react";

export const PrivacyPolicy = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>UniU</h1>
          <ul>
            <li>
              <Link to="/">Scopri</Link>
            </li>
            <li>
              <a href="\">Contatti</a>
            </li>
            <li>
              <Link to="/terms_conditions">Termini & Condizioni</Link>
            </li>
            <li className="active">
              <Link to="/privacy_policy">Privacy Policy</Link>
            </li>
            <a href="\" target="_blank" className="appstore-badge">
              <img
                alt="Download button that leads to the App Store"
                src={require("../assets/img/appstore-badge.svg")}
              />
            </a>
          </ul>
        </div>
      </header>
      <div className="container">
        {/* START OF PRIVACY POLICY TEXT */}
        <p className="text"></p>
        <p className="text">
          <h1>PRIVACY POLICY AGREEMENT</h1>
          <h2>Last updated March 01, 2020</h2>
          Thank you for choosing to be part of our community. We are committed
          to protecting your personal information and your right to privacy. If
          you have any questions or concerns about our policy, or our practices
          with regards to your personal information, please contact us at
          uniu.app@gmail.com. When you visit our mobile application, and use our
          services, you trust us with your personal information. We take your
          privacy very seriously. In this privacy policy, we seek to explain to
          you in the clearest way possible what information we collect, how we
          use it and what rights you have in relation to it. We hope you take
          some time to read through it carefully, as it is important. If there
          are any terms in this privacy policy that you do not agree with,
          please discontinue use of our Apps and our services. This privacy
          policy applies to all information collected through our mobile
          application, ("<b>Apps</b>"), and/or any related services, sales,
          marketing or events (we refer to them collectively in this privacy
          policy as the "<b>Services</b>").
          <h2>
            Please read this privacy policy carefully as it will help you make
            informed decisions about sharing your personal information with us.
          </h2>
          A copy of this agreement is provided at:{" "}
          <a href="www.uniu.it/privacy_policy">www.uniu.it/privacy_policy</a>
          <h1>1. WHAT INFORMATION DO WE COLLECT? </h1>
          <h2>Personal information you disclose to us</h2>
          <i>
            <b>In Short</b>: We collect personal information that you provide to
            us such as name, contact information, passwords, and social media
            login data.
          </i>
          We collect personal information that you voluntarily provide to us
          when registering at the Apps, expressing an interest in obtaining our
          products and services. The personal information that we collect
          depends on the context of your interactions with us and the Apps, the
          choices you make and the products and features you use. The personal
          information we collect can include the following: <br />
          <b>Publicly Available Personal Information.</b> We collect first name,
          last name; email addresses; and other similar data. <br />
          <b>Personal Information Provided by You.</b> We collect universities
          career data and other similar data. <br />
          <b>Credentials.</b> We collect passwords and similar security
          information used for authentication and account access, all this kind
          of information are securely encrypted. <br />
          <b>Social Media Login Data.</b> We provide you with the option to
          register using social media account like Facebook, Google or other
          social media account. If you choose to register in this way, we will
          collect the Information described in the section called "HOW DO WE
          HANDLE YOUR SOCIAL LOGINS" below. All personal information that you
          provide to us must be true, complete and accurate, and you must notify
          us of any changes to such personal information.
          <br />
          <h1>Information collected through our Apps</h1>
          <br />
          <b> In Short:</b>{" "}
          <i>
            We may collect information regarding your mobile device, push
            notifications, when you use our apps.
          </i>
          <br />
          If you use our Apps, we may also collect the following information:
          <br />
          <i>Mobile Device Access.</i> We may request access or permission to
          certain features from your mobile device, including your mobile
          device's notification, biometric identification, and other features.
          If you wish to change our access or permissions, you may do so in your
          device's settings.
          <br />
          <i>Push Notifications.</i> We may request to send you push
          notifications regarding your account or the mobile application. If you
          wish to opt-out from receiving these types of communications, you may
          turn them off in your device's settings.
          <br />
          <h1>Information collected from other sources</h1>
          <br />
          <b>
            <i>In Short:</i>
          </b>
          <i>
            We may collect limited data from public databases of universities,
            advert, social media platforms, and other outside sources.
          </i>
          <br /> We may obtain information about your from other sources, such
          as public databases, joint marketing partners, social media platforms
          (such as Facebook and Google), as well as from other third parties.
          Examples of the information we receive from other sources include:
          email; marketing leads and search results and links, including paid
          listings (such as sponsored links).
          <br />
          All the information collected through our Apps are the one that you
          can see into the Apps screens, all passwords and pins will not be
          collected into our database to guarantee your safety. <br />
          <b>2. HOW DO WE USE YOUR INFORMATION?</b>
          <i>
            <b>In Short</b>: We process your information for purposes based on
            legitimate business interests, the fulfillment of our contract with
            you, compliance with our legal obligations, and/or your consent.
          </i>
          <br />
          We use personal information collected via our Apps for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations. We
          indicate the specific processing grounds we rely on next to each
          purpose listed below.
          <br />
          We use the information we collect or receive:
          <ul>
            <li>
              <b>To facilitate account creation and login process.</b> If you
              choose to link your account with us to a third party account (such
              as your Google or Facebook account), we use the information you
              allowed us to collect from those third parties to facilitate
              account creation and login process for the performance of the
              contract. See the section below headed "HOW DO WE HANDLE YOUR
              SOCIAL LOGINS" for further information.
            </li>
            <li>
              <b>To send administrative information to you.</b> We may use your
              personal information to send you product, service and new feature
              information and/or information about changes to our terms,
              conditions, and policies.
            </li>
            <li>
              <b>To post testimonials.</b> We post testimonials on our Apps that
              may contain personal information. Prior to posting a testimonial,
              we will obtain your consent to use your name and testimonial. If
              you wish to update, or delete your testimonial, please contact us
              at uniu.app@gmail.com and be sure to include your name,
              testimonial location, and contact information.
            </li>
            <li>
              <b>Deliver targeted advertising to you.</b> We may use your
              information to develop and display content and advertising (and
              work with third parties who do so) tailored to your interests
              and/or location and to measure its effectiveness.
            </li>
            <li>
              <b>
                To enforce our terms, conditions and policies for Business
                Purposes, Legal Reasons and Contractual.
              </b>
            </li>
            <li>
              <b>To respond to legal requests and prevent harm.</b> If we
              receive a subpoena or other legal request, we may need to inspect
              the data we hold to determine how to respond.
            </li>
            <li>
              <b>To manage user accounts.</b> We may use your information for
              the purposes of managing our account and keeping it in working
              order.
            </li>
          </ul>
          <h1>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h1>
          <br />
          <i>
            <b> In Short:</b> We only share information with your consent, to
            comply with laws, to provide you with services, to protect your
            rights, or to fulfill business obligations.
          </i>
        </p>
      </div>
    </div>
  );
};
