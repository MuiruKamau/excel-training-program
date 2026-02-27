import { MapPin, Phone, Calendar, Clock, Car, Bus, Map as MapIcon, Mail } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Excel Training Location: Westlands, Nairobi
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our Excel training and real estate modelling courses take place every Saturday at{" "}
              <strong className="text-blue-700 font-semibold">Delta Corner Annex, Westlands, Nairobi</strong>. 
              Convenient location for professionals across Nairobi. Easy access from Kilimani, 
              Parklands, and CBD. Excel for beginners Kenya to expert-level training.
            </p>
            
            <div className="inline-block bg-blue-50 border-l-4 border-blue-600 px-6 py-4 rounded-r-lg text-left">
              <p className="text-gray-700">
                <span className="text-xl mr-2">✨</span>
                <strong className="text-gray-900">What's Included:</strong> Light refreshments and lunch break provided during training sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Embed and Directions Button */}
        <div className="text-center mb-16">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl mb-8 border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8433278079906!2d36.798978573111356!3d-1.2666906356011323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1740f0952765%3A0xfad396de1a6c8951!2sDelta%20Corner%20Annex%2C%205th%20Floor%20Ring%20Rd%20Westlands%20Ln%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1772120096107!5m2!1sen!2ske" 
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <a 
            href="https://maps.google.com/?q=Delta+Corner+Annex+Westlands+Nairobi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <MapIcon className="w-5 h-5" />
            Get Directions
          </a>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
              <MapPin className="text-blue-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>
            <div className="text-gray-600 space-y-1">
              <p>Delta Corner Annex, 5th Floor</p>
              <p>Ring Road Westlands Lane</p>
              <p>Westlands, Nairobi</p>
              <p>Kenya</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
              <Phone className="text-blue-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="text-gray-600">
                <p><a href="tel:+254796868984" className="hover:text-blue-700 transition-colors">+254 796 868 984</a></p>
                <p><a href="tel:+254798884016" className="hover:text-blue-700 transition-colors">+254 798 884 016</a></p>
              </div>
              <div className="pt-2 text-sm text-gray-500 space-y-1">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:bella.kamau@outlook.com" className="hover:underline">bella.kamau@outlook.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:Harietwambui@outlook.com" className="hover:underline">Harietwambui@outlook.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
              <Calendar className="text-blue-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Training Schedule</h3>
            <p className="font-bold text-gray-900 mb-4">Every Saturday</p>
            <div className="text-gray-600 text-sm space-y-2 mb-4">
              <p><strong className="text-gray-900">Beginner:</strong> 1st Saturday</p>
              <p><strong className="text-gray-900">Intermediate:</strong> 2nd Saturday</p>
              <p><strong className="text-gray-900">Expert:</strong> 3rd & 4th Saturday</p>
            </div>
            <div className="flex items-center gap-2 text-blue-700 font-bold">
              <Clock className="w-4 h-4" />
              <span>Time: 7:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Transport & Parking Info */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 grid md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <div className="text-2xl mt-1"><Car className="text-gray-400 w-6 h-6" /></div>
            <div>
              <strong className="block text-gray-900 mb-1">Parking</strong>
              <p className="text-sm text-gray-600">Free parking available at Delta Corner building</p>
            </div>
          </div>

          <div className="flex gap-4 border-y md:border-y-0 md:border-x border-gray-200 py-6 md:py-0 md:px-8">
            <div className="text-2xl mt-1"><Bus className="text-gray-400 w-6 h-6" /></div>
            <div>
              <strong className="block text-gray-900 mb-1">Public Transport</strong>
              <p className="text-sm text-gray-600">Accessible via matatu routes 23, 46, 100, 233 to Westlands</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl mt-1"><MapPin className="text-gray-400 w-6 h-6" /></div>
            <div>
              <strong className="block text-gray-900 mb-1">Nearby Landmarks</strong>
              <p className="text-sm text-gray-600">Near The Mall Westlands, Westlands Roundabout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
