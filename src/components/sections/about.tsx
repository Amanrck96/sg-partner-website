import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-team');

  const commitmentPoints = [
    'Equip students and professionals with industry-relevant skills and expertise',
    'Facilitate connections between top talent and leading businesses',
    'Provide personalized support and guidance to ensure career success',
    'Continuously innovate and improve our services to meet the evolving needs of the industry',
  ];

  const industries = {
    'IT': 'Mobility, Analytics, Telecom, Infrastructure, Networking, E-commerce, Health Care, Storage and Server, CRM/ERP, Application Support, Hospitality',
    'Non-IT': 'Banking & Insurance, Retail, FMCG, Pharmaceuticals & Health care, Manufacturing, Chemical, Construction, Advertisement'
  }

  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">Welcome to SG Partner</h2>
            <p className="text-lg text-foreground/80">
              SG Partner, a leading Campus Engagement and Recruitment Solutions provider, specializes in connecting top talent with prominent businesses. With over 25+ years of Pan India experience, we offer a comprehensive range of services designed to foster growth, innovation, and excellence.
            </p>
            <div className='space-y-2'>
                <p className='font-bold'>Our expertise spans:</p>
                <ul className='list-disc list-inside text-foreground/80'>
                    <li>Campus Recruitment & Support</li>
                    <li>Alumni Hiring</li>
                    <li>Assessment & Training Support</li>
                    <li>Executive Search</li>
                </ul>
            </div>
            
          </div>
          <div>
            {aboutImage && (
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h3 className="font-headline text-2xl text-primary font-bold">Our Mission</h3>
                <p className="text-foreground/80">
                At SG Partner, our mission is to empower young talents and professionals with the skills, expertise, and connections/placement opportunities required to succeed in their chosen careers. We strive to build a vibrant ecosystem that fosters growth, innovation, and excellence by providing comprehensive recruitment, training, and placement solutions.
                </p>
                <h3 className="font-headline text-2xl text-primary font-bold">Our Commitment</h3>
                <ul className="space-y-3">
                    {commitmentPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span className="text-foreground/80">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6">
                <h3 className="font-headline text-2xl text-primary font-bold">Industries We Serve</h3>
                <div className="space-y-4">
                    {Object.entries(industries).map(([key, value]) => (
                        <div key={key}>
                            <h4 className="font-bold text-lg text-primary">{key}</h4>
                            <p className="text-muted-foreground">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
