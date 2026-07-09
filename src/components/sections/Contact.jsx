import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.details.trim()) newErrors.details = 'Project details are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', details: '' });
      }, 800);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Let's Build Together" 
          subtitle="Ready to start your next big project? Get in touch with our team."
        />

        <div className="flex flex-col lg:flex-row gap-16 mt-16 max-w-6xl mx-auto">
          
          <div className="lg:w-1/3">
            <h3 className="text-3xl font-poppins font-bold text-text-heading mb-6">Contact Info</h3>
            <p className="text-text-body mb-10 text-lg">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text-heading text-lg">Phone</h4>
                  <p className="text-text-body">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text-heading text-lg">Email</h4>
                  <p className="text-text-body">hello@altimasoftware.com</p>
                  <p className="text-sm text-gray-500">24/7 online support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text-heading text-lg">Location</h4>
                  <p className="text-text-body">123 Innovation Drive</p>
                  <p className="text-text-body">Tech City, TC 90210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
            >
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-text-heading mb-2">Message Sent!</h3>
                  <p className="text-text-body">Thank you for reaching out. We will get back to you shortly.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="secondary" className="mt-8">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-bg-secondary/50`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-bg-secondary/50`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-heading mb-2">Company Name (Optional)</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-bg-secondary/50"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-text-heading mb-2">Project Details *</label>
                    <textarea 
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.details ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-bg-secondary/50 resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                    {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                  </div>
                  
                  <Button type="submit" variant="primary" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
