import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './contact-form';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
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
                <p className="text-muted-foreground">KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Phone</h3>
                <p className="text-muted-foreground">Anand: 63633 75377</p>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.838521799983!2d77.62227707481028!3d12.9822097873323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168ce518933d%3A0x26c2e399033cb244!2sD'Souza%20Layout%2C%20Ashok%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001%2C%20India!5e0!3m2!1sen!2sus!4v1758957813009!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
