import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Building, Search, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: "Campus Engagement For Corporates",
    description: [
      "Identifying top talent through tailored campus engagement initiatives.",
      "Managing seamless campus selection—whether on-campus or via virtual placement drives till on-boarding.",
      "we participate in various guidance phases with the corporate."
    ],
    footer: "Let’s build the future workforce together!"
  },
  {
    icon: Users,
    title: "Alumni Hiring",
    description: [
      "Identify and engage with high-performing alumni from top institutions.",
      "Facilitate meaningful connections between alumni and our corporate partners.",
      "Streamline the hiring process by sourcing pre-qualified professionals with relevant industry experience.",
      "By tapping into alumni talent, organizations can benefit from trusted, skilled professionals who bring proven capabilities and cultural alignment to the workplace and the exclusive tie up we have with are training partners across the country helps us in quick identifying the right talent for you."
    ],
    footer: "Let’s help you reconnect, recruit, and retain top alumni talent!"
  },
  {
    icon: Building,
    title: "Virtual Placement Office",
    description: [
      "Leverage our vast and ever-growing network of recruiters across India, with a strong local presence.",
      "Keep expenses in check with the support of our dedicated team, ensuring cost-effective and efficient hiring solutions.",
      "Receive continuous assistance from candidate shortlisting to student onboarding, with complete transparency.",
      "Benefit from a commitment to integrity, ensuring a fair and structured recruitment process guided by experienced professionals."
    ],
    footer: "Partner with us and elevate your institution’s placement success with a trusted, efficient, and ethical approach."
  },
  {
    icon: Search,
    title: "Executive Search",
    description: [
      "Extensive Talent Network – We leverage a vast network of industry professionals and leadership talent.",
      "Advanced Search Methodologies – Utilizing data-driven insights and market intelligence, we identify the best-fit candidates.",
      "Personalized Support – From sourcing to final onboarding, we provide end-to-end assistance, ensuring a seamless hiring process."
    ],
    footer: "Let’s help you find exceptional leaders who make a difference!"
  },
];

const otherServices = {
    title: "What We Do?",
    description: "At SG Partner, we specialize in providing innovative recruitment and Job oriented training solutions to connect top talent with leading businesses. Our services include:",
    points: [
      'Recruitment/Placements Drive: On-campus or virtual hiring process',
      'Campus Placement Week Concept',
      'Alumni Lateral Hiring Solution',
      'Corporate Readiness Training Services',
      'Industry-Specific Training Services',
      'Virtual Hiring Solution',
      'Executive Search',
    ],
}

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
        <div className='mt-16'>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{otherServices.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">{otherServices.description}</p>
                    <ul className="space-y-2 grid md:grid-cols-2 gap-x-8">
                        {otherServices.points.map((point, index) => (
                            <li key={index} className="flex items-start">
                            <CheckCircle className="text-accent mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                            <span className="text-foreground/90">{point}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
