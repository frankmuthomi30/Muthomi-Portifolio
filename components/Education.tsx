import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../@/components/ui/card"

export function Education() {
  const education = [
    {
      degree: "Diploma in Information Communication Technology",
      institution: "THE NYERI NATIONAL POLYTECHNIC",
      year: "2021 - 2023",
      description: "Focused on software development, networking, and system analysis."
    },
    {
      degree: "Web Development Certificate",
      institution: "THE JITU",
      year: "January - March 2023",
      description: "Intensive web development training program covering modern web technologies and best practices."
    }
  ]

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Training</h2>
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution} | {edu.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

