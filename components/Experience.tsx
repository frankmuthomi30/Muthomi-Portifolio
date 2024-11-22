import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Enumerator",
      company: "Ministry of Labour, Department of Social Protection",
      description: "Led data collection initiatives for national social protection programs, ensuring accurate and comprehensive information gathering from vulnerable households.",
    },
    {
      title: "Data Entry Clerk",
      company: "Nyeri Town Constituency",
      description: "Achieved 99.9% data accuracy in Excel spreadsheets, processing over 5,000 records and implementing an improved filing system that reduced retrieval time by 30%.",
    },
    {
      title: "ICT Clerk",
      company: "Independent Electoral and Boundaries Commission (IEBC)",
      description: "Streamlined voter processing, reducing wait times by 25% while maintaining 100% data integrity. Managed a polling station serving over 1,000 voters.",
    },
    {
      title: "ICT Attaché",
      company: "Teawasco",
      description: "Optimized customer service processes, reducing query resolution time by 15%. Upgraded and maintained company IT infrastructure, improving overall system efficiency.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

