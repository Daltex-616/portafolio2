import React from 'react';
import { Code2, Palette, Terminal } from 'lucide-react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-blue-00 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Sobre Mi
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Code2 className="w-8 h-8" />}
            title="Frontend Development"
            description="Creación de interfaces de usuario intuitivas y receptivas utilizando marcos modernos y mejores prácticas."
          />
          <FeatureCard
            icon={<Terminal className="w-8 h-8" />}
            title="Backend Development"
            description="Creación de aplicaciones escalables del lado del servidor y API RESTful."
          />
          <FeatureCard
            icon={<Palette className="w-8 h-8" />}
            title="UI/UX Design"
            description="Diseñar experiencias de usuario hermosas y funcionales que deleite a los usuarios."
          />
        </div>
      </div>
    </section>
  );
}