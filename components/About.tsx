import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../@/components/ui/card"
import profile from '../app/Assets/FRANK.jpg'

export function About() {
  return (
    <div className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src={profile.src}
                alt="Frank Muthomi"
                className="rounded-2xl w-full h-full object-cover shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
          <Card className="md:w-2/3">
            <CardHeader>
              <CardTitle>Aspiring ICT Professional & AI Enthusiast</CardTitle>
              <CardDescription>Bridging the gap between technology and innovation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                As an aspiring ICT professional skilled in software development and system management, I bring a unique blend of technical expertise and innovative thinking to every project. My experience spans from creating efficient data management systems to developing cutting-edge web applications.
              </p>
              <p className="text-lg">
                I'm passionate about leveraging AI to create groundbreaking front-end solutions, always pushing the boundaries of what's possible in web development. My goal is to contribute to the tech industry's evolution, one line of code at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

