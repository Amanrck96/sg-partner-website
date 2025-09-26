import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const recentPosts = blogPosts.slice(0, 3);

  const getBlogImage = (imageId: string) => PlaceHolderImages.find(img => img.id === imageId);

  return (
    <section id="blog" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">From Our Blog</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Insights and updates from our team of experts.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => {
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
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
