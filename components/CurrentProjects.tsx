"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../@/components/ui/card"
import { Badge } from "../@/components/ui/badge"
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from "../@/components/ui/button"

const projects = [
  {
    title: "Automation Learning",
    description: "Exploring various automation tools and techniques to streamline workflows and increase productivity.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Automation", "Productivity", "AI"]
  },
  {
    title: "React Native Transition",
    description: "Transitioning from web development to mobile app development using React Native.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    tags: ["React Native", "Mobile Development", "Cross-platform"]
  },
  {
    title: "M-Pesa Integration",
    description: "Learning to integrate M-Pesa payment system into web and mobile applications.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Fintech", "Payment Integration", "M-Pesa"]
  },
  {
    title: "Music Score Learning",
    description: "Developing skills in reading and interpreting music scores for personal growth and potential future projects.",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Music", "Personal Development", "Creativity"]
  }
]

export function CurrentProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const navigate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % projects.length
      }
      return (prevIndex - 1 + projects.length) % projects.length
    })
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="current-projects" className="py-20 bg-gradient-to-b from-background via-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            Current Projects
          </span>
        </h2>
        <div className="relative max-w-4xl mx-auto h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <Card className="w-full h-full overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-64 md:h-full relative">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold mb-4">
                      {projects[currentIndex].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg mb-6">
                      {projects[currentIndex].description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() => navigate(1)}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-3 h-3 rounded-full mx-1 p-0 ${
                index === currentIndex ? 'bg-primary' : 'bg-muted-foreground'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentProjects

