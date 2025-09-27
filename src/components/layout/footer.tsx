import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from '@/components/icons';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FacebookIcon,
    href: 'https://www.facebook.com/people/SG-Partner/61571871577302/',
  },
  {
    name: 'X',
    icon: XIcon,
    href: 'https://x.com/sgpartnerblr',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/company/sgpartner/',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/sgpartner.in/',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:sgpartnerindia@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-muted-foreground space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <p>KG Halli, D&apos; Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <p>Anand: 63633 75377</p>
                </div>
            </div>
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
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-center text-sm text-muted-foreground">
            All Rights Reserved by SG Partner
          </p>
          <p className="text-center text-xs text-muted-foreground mt-4 md:mt-0">
            Designed by Anand M (*AJK*)
          </p>
        </div>
      </div>
    </footer>
  );
}
