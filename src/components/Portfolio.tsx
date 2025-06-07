
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A comprehensive system for managing library operations, built as my bachelor's project using modern web technologies.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "FULL-STACK"
    },
    {
      title: "E-commerce Restaurant Website",
      description: "A complete e-commerce solution for restaurants with online ordering, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "WEB DEVELOPMENT"
    },
    {
      title: "Heart Disease Prediction ML",
      description: "Machine learning application for predicting heart disease using various health parameters and advanced algorithms.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      category: "MACHINE LEARNING"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <p className="text-gray-400 mb-6">I'M UI/UX DEVELOPER</p>
            </Card>
          </div>

          {/* Right Side - Portfolio Content */}
          <div className="lg:col-span-8 lg:pl-12">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-white mr-4">My Portfolio ("My completed college projects")</h2>
              {/* <span className="text-gray-500 text-xl">4</span> */}
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-slate-800/30 backdrop-blur-sm border-slate-700 overflow-hidden hover:bg-slate-800/50 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-fit">
                        VIEW PROJECT
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
