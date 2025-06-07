
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-white">
//               Coder<span className="text-yellow-400">.</span>
//             </span>
//           </div>
          
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <button
//                 onClick={() => scrollToSection('home')}
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 HOME
//               </button>
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 ABOUT
//               </button>
//               <button
//                 onClick={() => scrollToSection('services')}
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 SERVICES
//               </button>
//               <button
//                 onClick={() => scrollToSection('portfolio')}
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 PORTFOLIO
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
//               >
//                 CONTACT
//               </button>
//             </div>
//           </div>

//           <Button className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
//             DOWNLOAD CV
//           </Button>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-300 hover:text-white"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <button
//               onClick={() => scrollToSection('home')}
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
//             >
//               HOME
//             </button>
//             <button
//               onClick={() => scrollToSection('about')}
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
//             >
//               ABOUT
//             </button>
//             <button
//               onClick={() => scrollToSection('services')}
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
//             >
//               SERVICES
//             </button>
//             <button
//               onClick={() => scrollToSection('portfolio')}
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
//             >
//               PORTFOLIO
//             </button>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
//             >
//               CONTACT
//             </button>
//             <Button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
//               DOWNLOAD CV
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };




import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">
              CodEr<span className="text-yellow-400">.</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>

          <a
            href="/assets/dipak singh CV.pdf"
            download="Dipak_Singh_CV.pdf"
            className="hidden md:block"
          >
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
              DOWNLOAD CV
            </Button>
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-sm font-medium w-full text-left"
            >
              CONTACT
            </button>
            <a
              href="/assets/dipak singh CV.pdf"
              download="Dipak_Singh_CV.pdf"
              className="block w-full mt-4"
            >
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                DOWNLOAD CV
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
