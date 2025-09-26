import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, Landmark, Scale, HeartHandshake, Building2, Users } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: "Corporate Advisory",
    description: "Strategic guidance for corporate structuring, governance, and compliance to ensure sustainable growth."
  },
  {
    icon: Landmark,
    title: "Financial Institutions",
    description: "Specialized consultancy for banks and financial institutions on regulatory frameworks and risk management."
  },
  {
    icon: Scale,
    title: "Legal & Secretarial",
    description: "Comprehensive support for legal documentation, corporate filings, and secretarial practices."
  },
  {
    icon: HeartHandshake,
    title: "Non-Profit Sector",
    description: "Assisting non-profits with governance, funding strategies, and compliance for greater social impact."
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Expert advice on real estate transactions, RERA compliance, and project structuring."
  },
  {
    icon: Users,
    title: "Human Resources",
    description: "Solutions for talent management, compliance with labor laws, and HR policy development."
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            We provide a comprehensive range of services to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <service.icon className="w-10 h-10 text-accent" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
