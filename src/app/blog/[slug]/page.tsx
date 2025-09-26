import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, BlogPost } from '@/lib/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${post.title} | SG Partner Blog`,
    description: post.description,
  };
}

const getPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(img => img.id === post.imageId);

  return (
    <article className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-4">{post.title}</h1>
            <div className="flex justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {postImage && (
            <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12 shadow-lg">
              <Image
                src={postImage.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={postImage.imageHint}
                priority
              />
            </div>
          )}

          <div
            className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}
