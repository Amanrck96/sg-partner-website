import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
};

export default function Expertise() {
  return (
    <section id="expertise">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">Our Expertise & Approach</h2>
        </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {Object.values(expertiseData).map((item) => (
            <Card key={item.title} className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center">
                        <item.icon className="w-8 h-8 text-accent mr-4" />
                        <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                    </div>
                </CardHeader>
              <CardContent>
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
