import { Fragment } from "react";
import ContactForm from "../../components/contact/ContactForm";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
