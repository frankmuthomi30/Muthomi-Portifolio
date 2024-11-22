import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../@/components/ui/card"
import { Button } from "../@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "School Management Information System (MIS)",
      description: "A comprehensive system for school data management, including student information, attendance, and grading. Built with React.js and Firebase.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "https://school-mis-delta.vercel.app/",
    },
    {
      title: "Kikuyu Catholic Scores Website",
      description: "A platform for Catholic choirs to find and share Kikuyu Catholic music sheets. Implemented user authentication and file storage using Firebase.",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://kikuyu-catholic-scores-website.vercel.app/",
    },
    {
      title: "Garage Website",
      description: "A modern, responsive website designed and developed for a local garage, showcasing services and facilitating customer engagement.",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://proxy-auto-garage-react.vercel.app/",
    },
    {
      title: "Coffee Management Information System",
      description: "A comprehensive system developed as a school project to manage coffee production and sales information, streamlining the coffee supply chain.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

