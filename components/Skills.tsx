import { Badge } from "../@/components/ui/badge"

export function Skills() {
  const skills = [
    "JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS",
    "Git", "Data Management", "Network Configuration", "IT Support"
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

