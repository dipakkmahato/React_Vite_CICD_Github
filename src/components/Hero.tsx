
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Linkedin, Github, Youtube, Mail, Download, Play } from "lucide-react";

// export const Hero = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
//       <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
//       <div className="max-w-7xl mx-auto w-full relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* Left Side - Enhanced Profile Card */}
//           <div className="lg:col-span-4">
//             <Card className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-8 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl">
//               <div className="relative inline-block mb-8">
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-75 animate-pulse"></div>
//                 <img
//                   src="https://i.postimg.cc/sfnVNQQj/Passport-size-photo-Dipak.jpg"
//                   alt="Dipak Kumar Singh"
//                   className="relative w-36 h-36 rounded-full mx-auto border-4 border-white/20 shadow-xl object-cover"
//                 />
//                 <div className="absolute bottom-3 right-3 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-slate-800 shadow-lg animate-bounce"></div>
//               </div>
              
//               <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 Dipak Kumar Singh
//               </h2>
//               <div className="relative mb-8">
//                 <p className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
//                   Full-Stack Developer
//                 </p>
//                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
//               </div>
              
//               <div className="flex justify-center space-x-6 mb-8">
//                 {[
//                   { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
//                   { icon: Github, href: "#", color: "hover:text-gray-300" },
//                   { icon: Youtube, href: "#", color: "hover:text-red-400" },
//                   { icon: Mail, href: "#", color: "hover:text-yellow-400" }
//                 ].map(({ icon: Icon, href, color }, index) => (
//                   <a
//                     key={index}
//                     href={href}
//                     className={`text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
//                   >
//                     <Icon size={22} />
//                   </a>
//                 ))}
//               </div>

//               <div className="space-y-4 text-sm mb-8">
//                 {[
//                   { label: "RESIDENCE", value: "NEPAL" },
//                   { label: "CITY", value: "KATHMANDU" },
//                   { label: "AGE", value: "24" }
//                 ].map(({ label, value }) => (
//                   <div key={label} className="flex justify-between items-center py-2 border-b border-slate-700/30">
//                     <span className="text-gray-400 font-medium">{label}:</span>
//                     <span className="text-white font-semibold">{value}</span>
//                   </div>
//                 ))}
//               </div>

//               <Button 
//                 onClick={() => scrollToSection('contact')}
//                 className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 LET'S CONNECT <Mail className="ml-2" size={18} />
//               </Button>
//             </Card>
//           </div>

//           {/* Right Side - Enhanced Main Content */}
//           <div className="lg:col-span-8 lg:pl-16">
//             <div className="space-y-8">
//               <div className="space-y-2">
//                 <p className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase animate-fade-in">
//                   👋 Hello, I'm Dipak
//                 </p>
//                 <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
//               </div>
              
//               <div className="space-y-4">
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="block text-white mb-2">Creating Digital</span>
//                   <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
//                     Experiences
//                   </span>
//                 </h1>
                
//                 <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
//                   I craft modern web applications with clean code, beautiful designs, and seamless user experiences.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Button 
//                   onClick={() => scrollToSection('portfolio')}
//                   className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   VIEW MY WORK
//                 </Button>
                
//                 <Button 
//                   onClick={() => scrollToSection('about')}
//                   className="bg-transparent border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
//                 >
//                   <Play className="mr-2" size={18} />
//                   WATCH RESUME
//                 </Button>
//               </div>
//             </div>

//             {/* Enhanced Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
//               {[
//                 { number: "15+", label1: "COMPLETED", label2: "PROJECTS", color: "from-yellow-400 to-orange-500" },
//                 { number: "10+", label1: "HAPPY", label2: "CLIENTS", color: "from-blue-400 to-purple-500" },
//                 { number: "3+", label1: "YEARS", label2: "EXPERIENCE", color: "from-green-400 to-teal-500" }
//               ].map((stat, index) => (
//                 <Card 
//                   key={index} 
//                   className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-6 text-center hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
//                 >
//                   <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
//                     {stat.number}
//                   </div>
//                   <div className="space-y-1">
//                     <div className="text-sm text-gray-400 font-medium">{stat.label1}</div>
//                     <div className="text-sm text-gray-400 font-medium">{stat.label2}</div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Linkedin, Github, Youtube, Mail, Download, Play } from "lucide-react";
// import { VideoModal } from "./VideoModal";

// export const Hero = () => {
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
//       <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
//       <div className="max-w-7xl mx-auto w-full relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* Left Side - Enhanced Profile Card */}
//           <div className="lg:col-span-4">
//             <Card className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-8 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl">
//               <div className="relative inline-block mb-8">
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-75 animate-pulse"></div>
//                 <img
//                   src="https://i.postimg.cc/sfnVNQQj/Passport-size-photo-Dipak.jpg"
//                   alt="Dipak Kumar Singh"
//                   className="relative w-36 h-36 rounded-full mx-auto border-4 border-white/20 shadow-xl object-cover"
//                 />
//                 <div className="absolute bottom-3 right-3 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-slate-800 shadow-lg animate-bounce"></div>
//               </div>
              
//               <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 Dipak Kumar Singh
//               </h2>
//               <div className="relative mb-8">
//                 <p className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
//                   Full-Stack Developer
//                 </p>
//                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
//               </div>
              
//               <div className="flex justify-center space-x-6 mb-8">
//                 {[
//                   { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
//                   { icon: Github, href: "#", color: "hover:text-gray-300" },
//                   { icon: Youtube, href: "#", color: "hover:text-red-400" },
//                   { icon: Mail, href: "#", color: "hover:text-yellow-400" }
//                 ].map(({ icon: Icon, href, color }, index) => (
//                   <a
//                     key={index}
//                     href={href}
//                     className={`text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
//                   >
//                     <Icon size={22} />
//                   </a>
//                 ))}
//               </div>

//               <div className="space-y-4 text-sm mb-8">
//                 {[
//                   { label: "RESIDENCE", value: "NEPAL" },
//                   { label: "CITY", value: "KATHMANDU" },
//                   { label: "AGE", value: "24" }
//                 ].map(({ label, value }) => (
//                   <div key={label} className="flex justify-between items-center py-2 border-b border-slate-700/30">
//                     <span className="text-gray-400 font-medium">{label}:</span>
//                     <span className="text-white font-semibold">{value}</span>
//                   </div>
//                 ))}
//               </div>

//               <a
//                 href="/assets/dipak singh CV.pdf"
//                 download="Dipak_Singh_CV.pdf"
//               >
//                 <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
//                   DOWNLOAD CV <Download className="ml-2" size={18} />
//                 </Button>
//               </a>
//             </Card>
//           </div>

//           {/* Right Side - Enhanced Main Content */}
//           <div className="lg:col-span-8 lg:pl-16">
//             <div className="space-y-8">
//               <div className="space-y-2">
//                 <p className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase animate-fade-in">
//                   👋 Hello, I'm Dipak
//                 </p>
//                 <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
//               </div>
              
//               <div className="space-y-4">
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="block text-white mb-2">Creating Digital</span>
//                   <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
//                     Experiences
//                   </span>
//                 </h1>
                
//                 <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
//                   I craft modern web applications with clean code, beautiful designs, and seamless user experiences.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Button 
//                   onClick={() => scrollToSection('portfolio')}
//                   className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   VIEW MY WORK
//                 </Button>
                
//                 <Button 
//                   onClick={() => setIsVideoModalOpen(true)}
//                   className="bg-transparent border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
//                 >
//                   <Play className="mr-2" size={18} />
//                   WATCH RESUME
//                 </Button>
//               </div>
//             </div>

//             {/* Enhanced Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
//               {[
//                 { number: "15+", label1: "COMPLETED", label2: "PROJECTS", color: "from-yellow-400 to-orange-500" },
//                 { number: "10+", label1: "HAPPY", label2: "CLIENTS", color: "from-blue-400 to-purple-500" },
//                 { number: "3+", label1: "YEARS", label2: "EXPERIENCE", color: "from-green-400 to-teal-500" }
//               ].map((stat, index) => (
//                 <Card 
//                   key={index} 
//                   className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-6 text-center hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
//                 >
//                   <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
//                     {stat.number}
//                   </div>
//                   <div className="space-y-1">
//                     <div className="text-sm text-gray-400 font-medium">{stat.label1}</div>
//                     <div className="text-sm text-gray-400 font-medium">{stat.label2}</div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <VideoModal
//         isOpen={isVideoModalOpen}
//         onClose={() => setIsVideoModalOpen(false)}
//         videoSrc="/assets/videos.mp4"
//         title="Video Resume - Dipak Kumar Singh"
//       />
//     </section>
//   );
// };


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Github, Youtube, Mail, Download, Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

export const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Enhanced Profile Card */}
          <div className="lg:col-span-4">
            <Card className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-8 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-75 animate-pulse"></div>
                <img
                  src="https://i.postimg.cc/sfnVNQQj/Passport-size-photo-Dipak.jpg"
                  alt="Dipak Kumar Singh"
                  className="relative w-36 h-36 rounded-full mx-auto border-4 border-white/20 shadow-xl object-cover"
                />
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-slate-800 shadow-lg animate-bounce"></div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Dipak Kumar Singh
              </h2>
              <div className="relative mb-8">
                <p className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
                  Full-Stack Developer
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              </div>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="https://linkedin.com/in/dipak-kumar-singh-591670294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/dipakkmahato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.youtube.com/@dipakkumarsingh2473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <Youtube size={22} />
                </a>
                <a
                  href="mailto:dpmahato135@gmail.com"
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <Mail size={22} />
                </a>
              </div>

              <div className="space-y-4 text-sm mb-8">
                {[
                  { label: "RESIDENCE", value: "NEPAL" },
                  { label: "CITY", value: "KATHMANDU" },
                  { label: "AGE", value: "25" }
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-slate-700/30">
                    <span className="text-gray-400 font-medium">{label}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>

              <a
                href="/assets/dipak singh CV.pdf"
                download="Dipak_Singh_CV.pdf"
              >
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  DOWNLOAD CV <Download className="ml-2" size={18} />
                </Button>
              </a>
            </Card>
          </div>

          {/* Right Side - Enhanced Main Content */}
          <div className="lg:col-span-8 lg:pl-16">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase animate-fade-in">
                  👋 Hello, I'm Dipak
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white mb-2">Creating Digital</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                    Experiences
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  I craft modern web applications with clean code, beautiful designs, and seamless user experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  VIEW MY WORK
                </Button>
                
                <Button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-transparent border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="mr-2" size={18} />
                  WATCH RESUME
                </Button>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { number: "15+", label1: "COMPLETED", label2: "PROJECTS", color: "from-yellow-400 to-orange-500" },
                { number: "10+", label1: "HAPPY", label2: "CLIENTS", color: "from-blue-400 to-purple-500" },
                { number: "3+", label1: "YEARS", label2: "EXPERIENCE", color: "from-green-400 to-teal-500" }
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-6 text-center hover:bg-slate-800/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400 font-medium">{stat.label1}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label2}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/assets/videos.mp4"
        title="Video Resume - Dipak Kumar Singh"
      />
    </section>
  );
};
