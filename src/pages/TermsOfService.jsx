import { Layout } from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const TermsOfService = () => {
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
              <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-text-heading">Terms of Service</h1>
              <p className="text-text-body text-xs sm:text-sm mt-0.5">Understand our service conditions in simple language.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-primary soft-shadow space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">1. Agreement to Terms</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                By accessing or using our portfolio website, you agree to be bound by these simple terms of service and our privacy policy.
              </p>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">2. Intellectual Property</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                All source code, designs, illustrations, logo graphics, and editorial content on this site are the intellectual property of Altima Software Solutions.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">3. Service Intent</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                This site serves exclusively as a digital portfolio and business inquiries hub. We do not host user-facing software applications or billing portals here.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-poppins font-semibold text-text-heading mb-1.5">4. Liability Limitation</h3>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                Altima Software Solutions is not liable for any direct, indirect, or consequential damages resulting from your navigation or use of this website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
