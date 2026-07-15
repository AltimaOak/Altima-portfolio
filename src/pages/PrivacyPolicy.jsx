import { Layout } from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-10 bg-bg-primary min-h-[70vh] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl relative z-10 pt-4">
          <div className="mb-5 flex justify-start">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-text-body hover:text-primary transition-colors font-medium text-xs sm:text-sm"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          <div className="flex items-center gap-3.5 mb-6">
            <img src="/logo-icon.png" alt="Altima Logo Icon" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-text-heading">Privacy Policy</h1>
              <p className="text-text-body text-xs sm:text-sm mt-0.5">Simple, transparent terms regarding your data privacy.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-primary soft-shadow space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">1. Data Collection</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                We only collect basic contact information (such as your name and email address) when you voluntarily submit them through our contact form.
              </p>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">2. Data Usage</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                Your submitted details are strictly used to correspond with you regarding your business requests and project consultations. We never sell or share your data.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">3. Cookies</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                Our portfolio utilizes minimal cookies solely to optimize page loading times and basic website operations. We do not run any invasive user-tracking scripts.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">4. Data Security</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                We employ standard secure hosting practices to protect your information from unauthorized access, alteration, or disclosure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
