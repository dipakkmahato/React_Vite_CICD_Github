
// import { Card } from "@/components/ui/card";

// export const About = () => {
//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* Left Side - Same Profile Card */}
//           <div className="lg:col-span-4">
//             <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 text-center sticky top-24">
//               <div className="relative inline-block mb-6">
//                 <img
//                   src="https://i.postimg.cc/sfnVNQQj/Passport-size-photo-Dipak.jpg"
//                   alt="Dipak Kumar Singh"
//                   className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-400 object-cover"
//                 />
//                 <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-800"></div>
//               </div>
              
//               <h2 className="text-2xl font-bold text-white mb-2">Dipak Kumar Singh</h2>
//               <p className="text-gray-400 mb-6">I'M FULL-STACK DEVELOPER</p>
//             </Card>
//           </div>

//           {/* Right Side - About Content */}
//           <div className="lg:col-span-8 lg:pl-12">
//             <div className="flex items-center mb-6">
//               <h2 className="text-3xl font-bold text-white mr-4">My story</h2>
//               <span className="text-gray-500 text-xl">1</span>
//             </div>

//             <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
//               <div className="relative">
//                 <div className="text-yellow-400 text-6xl font-bold absolute -top-4 -left-2">"</div>
//                 <p className="text-gray-300 text-lg leading-relaxed pl-8">
//                   I am a Computer Engineer specializing in React and Next.js development, 
//                   with a future aim to enhance my professional development and build a 
//                   successful career as a developer. Graduate from Universal Engineering 
//                   and Science College, Class of 2024, with 6 months of hands-on experience 
//                   at Dur Sikshya Institute.
//                 </p>
//                 <div className="text-yellow-400 text-6xl font-bold absolute -bottom-8 right-4">"</div>
//               </div>
//             </div>

//             <div className="mt-12">
//               <div className="flex items-center mb-6">
//                 <h2 className="text-3xl font-bold text-white mr-4">Video resume</h2>
//                 <span className="text-gray-500 text-xl">2</span>
//               </div>

//               <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 overflow-hidden">
//                 <div className="relative h-64 md:h-80">
//                   <img
//                     src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
//                     alt="Developer workspace"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                     <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
//                       <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
//                     </button>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Same Profile Card */}
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
              <p className="text-gray-400 mb-6">I'M FULL-STACK DEVELOPER</p>
            </Card>
          </div>

          {/* Right Side - About Content */}
          <div className="lg:col-span-8 lg:pl-12">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-white mr-4">My story</h2>
              {/* <span className="text-gray-500 text-xl">1</span> */}
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
              <div className="relative">
                <div className="text-yellow-400 text-6xl font-bold absolute -top-4 -left-2">"</div>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  I am a Computer Engineer specializing in Full Stack development, 
                  with a future aim to enhance my professional development and build a 
                  successful career as a developer. Graduate from Universal Engineering 
                  and Science College, Class of 2024, with 3 years of hands-on experience 
                  at MERN Stack Development Training , at Dursikshya Educational network.
                </p>
                <div className="text-yellow-400 text-6xl font-bold absolute -bottom-8 right-4">"</div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-white mr-4">Video resume</h2>
                {/* <span className="text-gray-500 text-xl">2</span> */}
              </div>

              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 overflow-hidden">
                <div className="relative">
                  <video
                    src="/assets/videos.mp4"
                    controls
                    className="w-full h-64 md:h-80 object-cover"
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
