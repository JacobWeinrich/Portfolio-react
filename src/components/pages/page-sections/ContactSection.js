import React from "react";
import "../../../css/defaults.css";

import { Form } from '@formio/react';

function ContactSection() {
  return (
    <section
      id="contact-section"
      className="page-section section-t1 text-white text-center"
    >
      <div className="container">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <h2 className="display-4 fw-semibold text-shadow-1 text-color-lime-green">
            Jacob Weinrich
          </h2>
          <h3 className="text-shadow-1">
            <span className="text-color-dark-green">
              <i class="fa-solid fa-phone"></i>
            </span>
            &nbsp;314-939-9335
            <br />
            <span className="text-color-dark-green">
              <i className="fa-solid fa-envelope" />
            </span>
            &nbsp; Jacobw@segotw.com
          </h3>
        </div>
      </div>
      <Form src="https://ghjhqoceuxoclqt.form.io/contactform" />
    </section>
  );
}

export default ContactSection;
