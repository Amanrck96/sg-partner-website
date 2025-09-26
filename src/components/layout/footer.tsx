import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/icons';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FacebookIcon,
    href: '#',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    href: '#',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:contact@sgpartner.com',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            All Rights Reserved by SG Partner
          </p>
        </div>
        <div className="mt-6 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            Designed by Anand M (*AJK*)
          </p>
        </div>
      </div>
    </footer>
  );
}
