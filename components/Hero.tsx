"use client"

import { TypeAnimation } from 'react-type-animation'
import { Button } from "../@/components/ui/button"
import backgroundimg from '../app/Assets/back.jpg'

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 z-10" />
        <img
          src={backgroundimg.src}
          alt="Tech Background"
          className="object-cover w-full h-full opacity-90 dark:opacity-90"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground drop-shadow-lg">Frank Muthomi Mbauni</h1>
        <TypeAnimation
          sequence={[
            'Aspiring ICT Professional',
            1200,
            'AI-Powered Frontend Developer',
            1200,
            'Software Innovator',
            12000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-2xl md:text-4xl mb-8 text-primary"
          repeat={Infinity}
        />
        <Button asChild size="lg">
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>
    </section>
  )
}

