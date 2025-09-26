import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-team');

  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">About SG Partner</h2>
            <p className="text-lg text-foreground/80">
              Founded on the principles of integrity and excellence, SG Partner is a premier consultancy firm dedicated to helping businesses thrive in a complex world. We believe in building lasting partnerships with our clients, providing tailored solutions that drive innovation and deliver tangible results.
            </p>
            <p className="text-foreground/80">
              Our team of seasoned experts brings a wealth of experience from diverse industries. We are united by a common mission: to empower your organization with the strategic insights and operational support needed to achieve its most ambitious goals. At SG Partner, your success is our business.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Our Office</h3>
                  <p className="text-muted-foreground">KG Halli, D' Souza Layout, Ashok Nagar<br />Bengaluru, Karnataka 560001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Contact</h3>
                  <p className="text-muted-foreground">Anand - 63633 75377</p>
                </div>
              </div>
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
      </div>
    </section>
  );
}