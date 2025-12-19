"use client";

import { Award, Users, Target, Wrench } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'We use only premium materials and follow strict quality standards in every project.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our experienced professionals bring years of expertise in aluminum and PVC installations.'
  },
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'We prioritize client satisfaction and deliver projects on time and within budget.'
  },
  {
    icon: Wrench,
    title: 'Professional Service',
    description: 'From consultation to installation and after-sales support, we provide comprehensive service.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
              About 3K Aluminum
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Your Trusted Partner in Mersin
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              3K Aluminum has established itself as a leading provider of aluminum and PVC solutions 
              in Mersin. We specialize in creating modern, durable, and aesthetically pleasing 
              installations for both residential and commercial properties.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to excellence and attention to detail has made us the preferred choice 
              for clients seeking high-quality facade cladding, glass balcony systems, and joinery solutions. 
              We combine traditional craftsmanship with modern technology to deliver outstanding results.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
