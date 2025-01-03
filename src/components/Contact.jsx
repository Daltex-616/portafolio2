import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 text-blue-500">{icon}</div>
      <div className="ml-4">
        <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Contactame
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informacion de Contacto</h3>
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail />}
                title="Email"
                detail="federicozamora616@gmail.com"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                detail="La Rioja, Argetina"
              />
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre - Empresa
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mmensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
