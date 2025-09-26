import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Typewriter } from '../typewriter';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-[80vh] w-full flex items-center justify-center text-center p-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
          <Typewriter text="Connect, Recruit and Thrive : Your Partner in Campus Recruitment" />
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Welcome to SG Partner. We deliver expert consultancy to navigate your business challenges and unlock sustainable growth.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/services">Our Services</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
