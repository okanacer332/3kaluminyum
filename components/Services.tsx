"use client";

import { Building2, Home, DoorOpen, Frame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Building2,
    title: 'Facade Cladding Systems',
    description: 'Modern and durable facade cladding solutions that enhance building aesthetics while providing excellent weather protection.',
    image: 'https://images.unsplash.com/photo-1615465096619-7be6d511dd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMGZhY2FkZSUyMGNsYWRkaW5nfGVufDF8fHx8MTc2NjE3NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Weather resistant', 'Modern design', 'Energy efficient', 'Long-lasting']
  },
  {
    icon: Home,
    title: 'Glass Balcony Systems',
    description: 'Elegant glass balcony systems that maximize views and natural light while ensuring safety and durability.',
    image: 'https://images.unsplash.com/photo-1686660052172-67cf6bdca33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJhbGNvbnklMjBtb2Rlcm58ZW58MXx8fHwxNzY2MTc0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Frameless design', 'Safety glass', 'Easy maintenance', 'Panoramic views']
  },
  {
    icon: DoorOpen,
    title: 'Aluminum Joinery',
    description: 'High-quality aluminum windows and doors with superior insulation and modern aesthetics for residential and commercial projects.',
    image: 'https://images.unsplash.com/photo-1688319694677-7729b163abf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMHdpbmRvdyUyMGpvaW5lcnl8ZW58MXx8fHwxNzY2MTc0MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Thermal insulation', 'Sound proofing', 'Custom designs', 'Durable finish']
  },
  {
    icon: Frame,
    title: 'PVC Joinery',
    description: 'Cost-effective PVC windows and doors offering excellent thermal and acoustic insulation with minimal maintenance.',
    image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYxMzkzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Energy saving', 'Low maintenance', 'Affordable', 'Weather resistant']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Comprehensive Aluminum & PVC Solutions
          </h2>
          <p className="text-xl text-gray-600">
            We provide a complete range of services for residential and commercial projects, 
            delivering quality craftsmanship and modern design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
