import { Card, CardContent } from '@/components/ui/card';
import { Target, Search, Settings } from 'lucide-react';

const expertiseData = {
  expertise: {
    title: 'Our Expertise',
    icon: Target,
    points: [
      'Campus Engagement Support End to End Process',
      'Alumni Hiring Support',
      'Customized Campus Recruitment solutions',
      'Corporate Campus Branding Support',
      'Executive Search',
    ],
    description: 'With a rich broadband spectrum of Pan India Network in Non-IT/IT & Engineering, we possess an in-depth understanding of the industry\'s needs. Our expertise spans:',
  },
  approach: {
    title: 'Our Approach',
    icon: Search,
    points: [
      'High-quality product delivery',
      'Constant monitoring of delivery standards',
      'Seamless integration with client requirements',
    ],
    description: 'We take pride in our meticulous approach, ensuring that every aspect of the Fresher Hiring through Campus Engagement is meticulously maintained. Our team actively participates in the Campus Engagement process, guaranteeing:',
  },
  whatWeDo: {
    title: 'What We Do?',
    icon: Settings,
    points: [
      'Recruitment/Placements Drive: On-campus or virtual hiring process',
      'Campus Placement Week Concept',
      'Alumni Lateral Hiring Solution',
      'Corporate Readiness Training Services',
      'Industry-Specific Training Services',
      'Virtual Hiring Solution',
      'Executive Search',
    ],
    description: 'At SG Partner, we specialize in providing innovative recruitment and Job oriented training solutions to connect top talent with leading businesses. Our services include:',
  },
};

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(expertiseData).map((item) => (
            <Card key={item.title} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-accent mr-4" />
                  <h3 className="font-headline text-2xl text-primary">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">&#8226;</span>
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
