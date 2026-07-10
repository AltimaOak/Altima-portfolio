import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const boldSubject = subject ? `*Subject:* ${subject}` : `*Subject:* General Project Consultation`;
    const text = `*New Inquiry from Website Portfolio*\n\n` +
                 `*Name:* ${name}\n` +
                 `*Email:* ${email}\n` +
                 `${boldSubject}\n\n` +
                 `*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/918108839330?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 bg-white border-t border-border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Let's build together." 
          subtitle="Ready to start your next project? Get in touch and let's discuss how we can help your business grow."
          className="text-center md:text-left"
        />

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full lg:w-5/12">
            <div className="bg-bg-primary rounded-[24px] p-6 sm:p-10 border border-border-primary h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-poppins font-bold text-text-heading mb-6">Contact Information</h3>
                <p className="text-text-body text-sm md:text-base mb-8 leading-relaxed">
                  Have a question or a project proposal? Send us a message and our team will get back to you within 24 hours.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white border border-border-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-text-heading text-xs uppercase tracking-wider text-text-body/60">Email Us</h4>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=altimasoftwaresolutions@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-heading font-medium hover:text-secondary transition-colors text-sm sm:text-base"
                    >
                      altimasoftwaresolutions@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white border border-border-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-text-heading text-xs uppercase tracking-wider text-text-body/60">Call Us</h4>
                    <a href="tel:+918108839330" className="text-text-heading font-medium hover:text-secondary transition-colors text-sm sm:text-base">+918108839330</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white rounded-[24px] p-6 sm:p-10 border border-border-primary neo-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-heading mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-heading focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-heading mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-heading focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-text-heading mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-heading focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm"
                  placeholder="How can we help?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-text-heading mb-2">Message *</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary text-text-heading focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none text-sm"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full flex items-center justify-center gap-2 font-semibold">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
