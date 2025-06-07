
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Web Application",
      description: "Build dynamic and scalable web applications tailored to meet your business needs.",
      buttonText: "ORDER NOW"
    },
    {
      title: "Website Design",
      description: "Create visually appealing and responsive website designs that captivate users.",
      buttonText: "ORDER NOW"
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive user interfaces and experiences that prioritize functionality and user engagement.",
      buttonText: "ORDER NOW"
    },
    {
      title: "Frontend Architecture",
      description: "Develop robust and scalable frontend architecture for seamless application performance.",
      buttonText: "ORDER NOW"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Profile Card */}
          <div className="lg:col-span-4">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 text-center sticky top-24">
              <div className="relative inline-block mb-6">
                <img
                  src="https://i.postimg.cc/sfnVNQQj/Passport-size-photo-Dipak.jpg"
                  alt="Dipak Kumar Singh"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-400 object-cover"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-800"></div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">Dipak Kumar Singh</h2>
              <p className="text-gray-400 mb-6">I'M APP DEVELOPER</p>
            </Card>
          </div>

          {/* Right Side - Services Content */}
          <div className="lg:col-span-8 lg:pl-12">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-white mr-4">My Services</h2>
              {/* <span className="text-gray-500 text-xl">3</span> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-slate-800/30 backdrop-blur-sm border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-full">
                    {service.buttonText} <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
