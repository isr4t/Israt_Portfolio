import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v5rr9c6",            // replace with your actual Service ID from EmailJS
      "template_f4wb0fm",      // your Template ID
      form.current,
      "Fvbq6V34YsfoD8uwu"      // your Public Key
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset(); // reset the form
    }, (error) => {
        console.log(error.text);
        alert("Something went wrong, please try again.");
    });
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
      <div className="max-w-xl mx-auto bg-neutral-800 p-8 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input 
            type="text" 
            name="user_name"
            placeholder="Your Name" 
            className="bg-neutral-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/50"
          />
          <input 
            type="email" 
            name="user_email"
            placeholder="Your Email" 
            className="bg-neutral-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/50"
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows={5} 
            className="bg-neutral-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/50"
          />
          <button 
            type="submit" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
