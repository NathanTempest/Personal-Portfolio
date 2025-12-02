import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-12 hover:scale-105 transition-transform duration-300">
      <h2 className="text-4xl font-bold mb-8 text-pink-500">Contact</h2>
      <ul className="text-gray-300 text-lg space-y-2">
        <li>
          Email:{" "}
          <a href="mailto:nishanthjason@gmail.com" className="underline text-gold">
            nishanthjason@gmail.com
          </a>
        </li>
        <li>Phone: 716-463-9623</li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/nathanjason" className="underline text-gold">
            linkedin.com/in/nathanjason
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/NathanTempest" className="underline text-gold">
            github.com/NathanTempest
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;