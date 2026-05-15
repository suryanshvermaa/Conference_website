import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />

      <div className="flex flex-col md:flex-row gap-20 max-w-6xl mx-auto">
        
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">
          {/* Location */}
          <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4 shadow">
            <MapPin className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">National Institute of Technology, Patna</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4 shadow">
            <Mail className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">nasl@nitp.ac.in</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4 shadow">
            <Phone className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-semibold text-gray-800">Call</h3>
              <p className="text-gray-600">+91 612 267 0455</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              title="NIT Patna Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.521975435267!2d85.1719948!3d25.6207961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1743854714737!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
