import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './contact-form';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl text-accent font-bold">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            We're here to help. Contact us for any inquiries or to discuss how we can support your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Our Office</h3>
                <p className="text-muted-foreground">123 Business Avenue, Suite 456<br />Metropolis, 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Email</h3>
                <p className="text-muted-foreground">contact@sgpartner.com</p>
              </div>
            </div>
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <p className="text-muted-foreground">Map Placeholder</p>
                </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
