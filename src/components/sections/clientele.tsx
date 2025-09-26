"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const clientLogos = PlaceHolderImages.filter(img => img.id.startsWith('client-logo-'));

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Innovate Inc.',
    avatarId: 'testimonial-avatar-1',
    text: "SG Partner's expertise was a game-changer for our company. Their strategic insights helped us navigate a complex merger seamlessly. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Founder, Tech Solutions',
    avatarId: 'testimonial-avatar-2',
    text: "The professionalism and dedication of the SG Partner team are unmatched. They are true partners in every sense of the word.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Samuel Lee',
    title: 'CFO, Global Ventures',
    avatarId: 'testimonial-avatar-3',
    text: 'Working with SG Partner has been an absolute pleasure. Their attention to detail and proactive approach have saved us significant time and resources.',
    rating: 5,
  },
];

export default function Clientele() {
  const getAvatar = (avatarId: string) => PlaceHolderImages.find(img => img.id === avatarId);

  return (
    <section id="clientele" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 space-y-20">
        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">Our Esteemed Clientele</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80">
              We have had the privilege of working with a diverse range of leading organizations and institutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div key={logo.id} className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300" title={logo.description}>
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  fill
                  className="object-contain"
                  data-ai-hint={logo.imageHint}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">What Our Clients Say</h2>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const avatar = getAvatar(testimonial.avatarId);
                return (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                          <p className="text-lg italic text-foreground/90">"{testimonial.text}"</p>
                          <div className="flex items-center pt-4">
                            <Avatar className="h-12 w-12">
                              {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />}
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 text-left">
                              <p className="font-bold text-primary">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                          </div>
                          <div className="flex pt-2">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
