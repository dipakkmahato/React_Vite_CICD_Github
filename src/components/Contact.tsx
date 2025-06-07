
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('pazpmt228GZeuKNTv');

      // Send email using your service ID and template ID
      await emailjs.send(
        'service_k0na3lh',
        'template_3xm4hjb',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Dipak Kumar Singh',
        }
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <p className="text-gray-400 mb-6">I'M REACTJS DEVELOPER</p>
              
              <div className="flex justify-center space-x-4 mb-8">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">RESIDENCE:</span>
                  <span className="text-white">NEPAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CITY:</span>
                  <span className="text-white">KATHMANDU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AGE:</span>
                  <span className="text-white">25</span>
                </div>
              </div>

              <Button className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                CONTACT ME <Mail className="ml-2" size={16} />
              </Button>
            </Card>
          </div>

          {/* Right Side - Contact Content */}
          <div className="lg:col-span-8 lg:pl-12">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-white mr-4">Get In Touch</h2>
              {/* <span className="text-gray-500 text-xl">5</span> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-full">
                      <Mail className="text-black" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-400">dpmahato135@email.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-full">
                      <Phone className="text-black" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-400">+977-9814802994</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-full">
                      <MapPin className="text-black" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Location</h3>
                      <p className="text-gray-400">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 p-6">
                <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    disabled={isLoading}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    disabled={isLoading}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    disabled={isLoading}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    disabled={isLoading}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
                  >
                    {isLoading ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
