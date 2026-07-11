import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Team = () => {
  const team = [
    {
      name: "Aditya Yadav",
      role: "Backend Engineer",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAACUCAMAAAAd373qAAAAY1BMVEX29vRhYWH////5+ff29vZbW1teXl78/PpYWFhUVFT6+vpRUVH///1JSUnr6+lsbGxmZmbR0dB1dXWtra2GhoXh4eC+vr7GxsWdnZyPj4+Xl5Z8fHy1tbXX19anp6fw8PAzMzOQU4cwAAAF2UlEQVR4nO1c2ZKrOAwF7xgwMWCWsM3/f+VAd6duZ26SxtiJnKk+j3lI6ZR2ITmKfvGLX/zifw38hQhDS3IAq9jRopRZoZRaPn/Cb8ME88jopqsLmqygp7Luu6rRk1EL5jx8GjhTbTeINKEs/gCjVIg0TVhZb0QMzji0jA+RqbGOExrfAKMioUV9Hg3JJIEW9DaIRE3Jbor/jUZcDLNBCFrYm0BkEOyR/F8sGKODRuF5BJbtbfO5BZoXOrQwi5c52aGAP5pIexMSBSLVWVjIvyEpGkmCcWmp6tSSwGpKdAzGoTEebDWwgdE2EAqY10cIrBQKI6GF30BIf4zAakjnIDI0rnZH0b+VoAOggNvYJoxeQ5wXaPkjbMrDKliVcJrAswKuk+ME4jitoAlwnbsQiFmpgJWADmWCb8g1LAFM3FSw+TJsNOKTfTXxH1BQAlF2PBdckMNGI9Q7M0iqDJRBeTybfYEOoOVd5s4gppAM8FK4M8gBCURYeWCQToDx1AuDpH13BqIBDEbY+GAwQjKYfDCATAh+rGj+ZeDGwJkAsBX5yGignhxF7x5NI+6DAWRG81GbxinozAgNHhiAjuE9dDhxuoAy6DwwAG310ejOgIH2aKh1HBetLVoByoBPTjPHDaIHZSAX53lRMsN+yOHODNIGdmiHnPNBDtkmbwwG12CUAw+vUecajASo/FtCcHQEVnIEuGRBEDaO4/dkVv0ZzJAI6f9xNSJW5kJUUM7MtYf2gG19JpQO+OhOYAMdoXSAK+eq6BNgSQ3PzlXRBlaA9ZnSjw5YCZaWuR8GtAaLptxDf7Mx6MEyGm9OPhgwuPraSz5YATfykpOHcVHMTgasviaq9uAIrIAr7LD0MC6KWQ3YZqLZgxWBzq5R6yEYgU4dpY/vB8ATL3dHEGfYiZd2nrbkwAub6ORqRgJ4e5xPrn1yB724vNanlB51BrbthYAvnJKxHg76cxGnooNf+iVyMcuhvV96brsRet30A1hmh7wh1ygK5lSQH1ngT0I6JsLGnkESxvHBBaSyHlsEEIW+Q1ov8YtaQQt9DWw7v0uaoFSwLerYfQuhQ1AXdRv4aKUCCjbtvQsibXoFMQSRyq6B2v3hiJ0m0LWo2yAWqzrJFMg14BUI2t/upAq6pr4FIsnuxJyGcc74F7iFFQVVUfzBbldOdJg6WHbX2LDbgXdh8W1ZNCHGIpv7QAq7JXsHBO2vsCnsAdQdELS/UaNdiFaELA6VWanCc+WstRnfiS4sMyKESH2y6Q9Y3ASVEVYCprTr9UVYHQ6RS2/b6Sfg1+HfQVBnPapgcUizCtQcWBERdTjhKDN7Hi76C+mIAnl5BkcHP4yH0ueQ6Hzw+wGrg3jRi+Dm8KMhFHhj+RNyOv5oCC0N+CtMmC8Hn/75pDATSEPiCCGsnHbt1uIiQigDSAw4Q2jRVV8w6vg1ltLi3CiO+Ms84uOJyWUaa5bniav4n3oQaZ6Ws1Yff74WiU80K4J5tJipWqVPPW2aXkCTPB1mbVQk5dOSBObS6PFcpKmX/cCbLFhftdPylDc4ccZNO9en5FD9YMOCln2lle8nODGKmn44CS92/xOYEMVwbhfkjQTPuO5P8Uukv5CgND71U+bltAJzNbP0leJfWLA0nhV3/GSOI6X73OrJSa8k0rzWiwMHiU0z+A6blqB53Sp5jAPn01zuf7L0aRCibqIDTo2zqSvBzOcaIu7tP1oh1RUA3nsHTJxaq7BEJKpoOPJvYLRC+wsmTDRz3mD0DSYqubeTwKYLxP6vIcadOuC69HIe5B0sbncVrZkuYBPAfdBddwpcxfAZ4B7Ejot+zJ3PjZ+JHQfxmfO18XNBf/qQzn08avVM0PrxeiSOrB8OfzHYDxecXDsvsj8b4vH54OLnUPSpEO0DBtgEr4IflIBdHw14CVJ9nwEJOhdcIPoHRvQOKtg+/NxTQla9CYO7D/ihwLPZBUzcLi3WBsj15epXIb+9DEBk+x5GtC2VfFPCv0BCYnEdYjTKAAAAAElFTkSuQmC",
      linkedin: "https://www.linkedin.com/in/aditya-yadav-ab0b242a5/"
    },
    {
      name: "Tanmay Mhatre",
      role: "Frontend Engineer",
      image: "data:image/png;base64,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",
      linkedin: "https://www.linkedin.com/in/tanmay-mhatre-956a25310/"
    },
    {
      name: "Nikhil Waghmare",
      role: "Full Stack Engineer",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAACUCAMAAAAd373qAAAAY1BMVEX29vRhYWH////5+ff29vZbW1teXl78/PpYWFhUVFT6+vpRUVH///1JSUnr6+lsbGxmZmbR0dB1dXWtra2GhoXh4eC+vr7GxsWdnZyPj4+Xl5Z8fHy1tbXX19anp6fw8PAzMzOQU4cwAAAF2UlEQVR4nO1c2ZKrOAwF7xgwMWCWsM3/f+VAd6duZ26SxtiJnKk+j3lI6ZR2ITmKfvGLX/zifw38hQhDS3IAq9jRopRZoZRaPn/Cb8ME88jopqsLmqygp7Luu6rRk1EL5jx8GjhTbTeINKEs/gCjVIg0TVhZb0QMzji0jA+RqbGOExrfAKMioUV9Hg3JJIEW9DaIRE3Jbor/jUZcDLNBCFrYm0BkEOyR/F8sGKODRuF5BJbtbfO5BZoXOrQwi5c52aGAP5pIexMSBSLVWVjIvyEpGkmCcWmp6tSSwGpKdAzGoTEebDWwgdE2EAqY10cIrBQKI6GF30BIf4zAakjnIDI0rnZH0b+VoAOggNvYJoxeQ5wXaPkjbMrDKliVcJrAswKuk+ME4jitoAlwnbsQiFmpgJWADmWCb8g1LAFM3FSw+TJsNOKTfTXxH1BQAlF2PBdckMNGI9Q7M0iqDJRBeTybfYEOoOVd5s4gppAM8FK4M8gBCURYeWCQToDx1AuDpH13BqIBDEbY+GAwQjKYfDCATAh+rGj+ZeDGwJkAsBX5yGignhxF7x5NI+6DAWRG81GbxinozAgNHhiAjuE9dDhxuoAy6DwwAG310ejOgIH2aKh1HBetLVoByoBPTjPHDaIHZSAX53lRMsN+yOHODNIGdmiHnPNBDtkmbwwG12CUAw+vUecajASo/FtCcHQEVnIEuGRBEDaO4/dkVv0ZzJAI6f9xNSJW5kJUUM7MtYf2gG19JpQO+OhOYAMdoXSAK+eq6BNgSQ3PzlXRBlaA9ZnSjw5YCZaWuR8GtAaLptxDf7Mx6MEyGm9OPhgwuPraSz5YATfykpOHcVHMTgasviaq9uAIrIAr7LD0MC6KWQ3YZqLZgxWBzq5R6yEYgU4dpY/vB8ATL3dHEGfYiZd2nrbkwAub6ORqRgJ4e5xPrn1yB724vNanlB51BrbthYAvnJKxHg76cxGnooNf+iVyMcuhvV96brsRet30A1hmh7wh1ygK5lSQH1ngT0I6JsLGnkESxvHBBaSyHlsEEIW+Q1ov8YtaQQt9DWw7v0uaoFSwLerYfQuhQ1AXdRv4aKUCCjbtvQsibXoFMQSRyq6B2v3hiJ0m0LWo2yAWqzrJFMg14BUI2t/upAq6pr4FIsnuxJyGcc74F7iFFQVVUfzBbldOdJg6WHbX2LDbgXdh8W1ZNCHGIpv7QAq7JXsHBO2vsCnsAdQdELS/UaNdiFaELA6VWanCc+WstRnfiS4sMyKESH2y6Q9Y3ASVEVYCprTr9UVYHQ6RS2/b6Sfg1+HfQVBnPapgcUizCtQcWBERdTjhKDN7Hi76C+mIAnl5BkcHP4yH0ueQ6Hzw+wGrg3jRi+Dm8KMhFHhj+RNyOv5oCC0N+CtMmC8Hn/75pDATSEPiCCGsnHbt1uIiQigDSAw4Q2jRVV8w6vg1ltLi3CiO+Ms84uOJyWUaa5bniav4n3oQaZ6Ws1Yff74WiU80K4J5tJipWqVPPW2aXkCTPB1mbVQk5dOSBObS6PFcpKmX/cCbLFhftdPylDc4ccZNO9en5FD9YMOCln2lle8nODGKmn44CS92/xOYEMVwbhfkjQTPuO5P8Uukv5CgND71U+bltAJzNbP0leJfWLA0nhV3/GSOI6X73OrJSa8k0rzWiwMHiU0z+A6blqB53Sp5jAPn01zuf7L0aRCibqIDTo2zqSvBzOcaIu7tP1oh1RUA3nsHTJxaq7BEJKpoOPJvYLRC+wsmTDRz3mD0DSYqubeTwKYLxP6vIcadOuC69HIe5B0sbncVrZkuYBPAfdBddwpcxfAZ4B7Ejot+zJ3PjZ+JHQfxmfO18XNBf/qQzn08avVM0PrxeiSOrB8OfzHYDxecXDsvsj8b4vH54OLnUPSpEO0DBtgEr4IflIBdHw14CVJ9nwEJOhdcIPoHRvQOKtg+/NxTQla9CYO7D/ihwLPZBUzcLi3WBsj15epXIb+9DEBk+x5GtC2VfFPCv0BCYnEdYjTKAAAAAElFTkSuQmCC",
      linkedin: "https://www.linkedin.com/in/nikhil-waghmare-8764503a2/"
    },
    {
      name: "Yash Nadkar",
      role: "Frontend Engineer",
      image: "data:image/png;base64,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",
      linkedin: "https://www.linkedin.com/in/yash-nadkar-44a934383/"
    }
  ];
  return (
    <section id="team" className="py-16 bg-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Team" 
          subtitle="The engineering and design minds behind Altima Software Solutions."
          className="text-center md:text-left mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-[24px] border border-border-primary overflow-hidden hover:neo-shadow transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                {/* LinkedIn link only on hover for desktop */}
                <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:flex items-center justify-center backdrop-blur-[2px]">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-colors shadow-lg transform hover:scale-110"
                    title="View LinkedIn Profile"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </div>

                {/* Floating LinkedIn link always visible on mobile/tablet */}
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white text-secondary flex items-center justify-center shadow-md active:bg-secondary active:text-white transition-colors lg:hidden"
                  title="View LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>

                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center border-t border-border-primary">
                <h3 className="text-lg font-poppins font-semibold text-text-heading mb-1">{member.name}</h3>
                <p className="text-secondary text-sm font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
