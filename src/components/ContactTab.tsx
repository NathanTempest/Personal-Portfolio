import React from "react";

const ContactTab: React.FC = () => (
  <section className="bg-darkbg p-6 rounded-lg shadow-lg animate-fade-in">
    <h2 className="text-xl font-bold mb-4">Contact</h2>
    <ul className="space-y-2">
      <li>Email: <a href="mailto:nishanthjason@gmail.com" className="underline text-gold">nishanthjason@gmail.com</a></li>
      <li>Phone: 716-463-9623</li>
      <li>LinkedIn: <a href="https://linkedin.com/in/nathanjason" className="underline text-gold">linkedin.com/in/nathanjason</a></li>
      <li>GitHub: <a href="https://github.com/NathanTempest" className="underline text-gold">github.com/NathanTempest</a></li>
    </ul>
  </section>
);

export default ContactTab;