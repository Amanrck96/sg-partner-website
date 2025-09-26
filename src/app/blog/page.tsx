import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | SG Partner',
  description: 'Insights and updates from the SG Partner team.',
};

export default function BlogPage() {
  const getBlogImage = (imageId: string) => PlaceHolderImages.find(img => img.id === imageId);

  return (
    <div className="bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold">Our Blog</h1>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80">
              Stay updated with the latest industry trends, tips, and news from the SG Partner team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postImage = getBlogImage(post.imageId);
              return (
                <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {postImage && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={postImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
