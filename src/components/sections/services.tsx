import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Building, Search, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: "Campus Engagement For Corporates",
    description: [
      "Identifying top talent through tailored campus engagement initiatives.",
      "Managing seamless campus selection—whether on-campus or via virtual placement drives till on-boarding.",
      "Participating in various guidance phases with the corporate."
    ],
    footer: "Let’s build the future workforce together!"
  },
  {
    icon: Users,
    title: "Alumni Hiring",
    description: [
      "Identifying and engaging with high-performing alumni from top institutions.",
      "Facilitating meaningful connections between alumni and our corporate partners.",
      "Streamlining the hiring process by sourcing pre-qualified professionals."
    ],
    footer: "Let’s help you reconnect, recruit, and retain top alumni talent!"
  },
  {
    icon: Building,
    title: "Virtual Placement Office",
    description: [
      "Leverage our vast network of recruiters across India.",
      "Keep expenses in check with our dedicated team for cost-effective solutions.",
      "Receive continuous assistance from shortlisting to student onboarding with complete transparency."
    ],
    footer: "Partner with us and elevate your institution’s placement success."
  },
  {
    icon: Search,
    title: "Executive Search",
    description: [
      "Extensive Talent Network of industry professionals and leadership talent.",
      "Advanced Search Methodologies using data-driven insights and market intelligence.",
      "Personalized, end-to-end support from sourcing to final onboarding."
    ],
    footer: "Let’s help you find exceptional leaders who make a difference!"
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <service.icon className="w-10 h-10 text-accent" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                <ul className="text-left space-y-2 text-muted-foreground">
                  {service.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <p className="font-semibold text-accent">{service.footer}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}