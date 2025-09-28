import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Image from 'next/image';



const images = [
  '/images/expertise/29.jpg',
  '/images/expertise/sg rectangle.jpg',
  '/images/expertise/1.jpg',
  '/images/expertise/2.jpg',
  '/images/expertise/3.jpg',
  '/images/expertise/4.jpg',
  '/images/expertise/5.jpg',
  '/images/expertise/6.jpg',
  '/images/expertise/7.jpg',
  '/images/expertise/8.jpg',
  '/images/expertise/9.jpg',
  '/images/expertise/10.jpg',
  '/images/expertise/11.jpg',
  '/images/expertise/12.jpg',
  '/images/expertise/13.jpg',
  '/images/expertise/14.jpg',
  '/images/expertise/15.jpg',
  '/images/expertise/16.jpg',
  '/images/expertise/17.jpg',
  '/images/expertise/18.jpg',
  '/images/expertise/19.jpg',
  '/images/expertise/20.jpg',
  '/images/expertise/21.jpg',
  '/images/expertise/22.jpg',
  '/images/expertise/23.jpg'
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">Our Expertise</h2>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Expertise image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
