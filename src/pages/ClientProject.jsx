import { Layout } from '../components/layout/Layout';
import { SectionTitle } from '../components/ui/SectionTitle';

export const ClientProject = () => {
  return (
    <Layout>
      <section className="py-24 bg-bg-secondary min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Client Project" 
            subtitle="Details about the client project will go here."
          />
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto text-center mt-12">
            <h2 className="text-2xl font-poppins font-bold text-text-heading mb-4">Project Overview</h2>
            <p className="text-text-body text-lg">
              This is a placeholder page for viewing specific client project details. You can add more content, images, and project descriptions here as needed.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
