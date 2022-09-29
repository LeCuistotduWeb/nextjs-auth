import React, {} from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";

const ContactPage = (props) => {
  return (
    <DefaultLayout>
      <div className="container">
        <section className="mb-4">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-5 mx-auto">
              <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
              <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-5 mx-auto">
              <form id="contact-form" name="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="name" className="form-control"/>
                      <label htmlFor="name" className="">Your name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" className="form-control"/>
                      <label htmlFor="email" className="">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control"/>
                      <label htmlFor="subject" className="">Subject</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"/>
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-left">
                <a className="btn btn-primary waves-effect waves-light">Send</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default ContactPage