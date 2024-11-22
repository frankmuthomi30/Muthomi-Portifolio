"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../@/components/ui/card"
import { Input } from "../@/components/ui/input"
import { Textarea } from "../@/components/ui/textarea"
import { Button } from "../@/components/ui/button"
import { PhoneIcon, MailIcon, LinkedinIcon, GlobeIcon } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-20 bg-muted/50 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Send me a message and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="text-primary" />
                <span>+254 797 887 378</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailIcon className="text-primary" />
                <span>frankmuthomi2019@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <LinkedinIcon className="text-primary" />
                <a href="https://linkedin.com/in/frankmuthomi" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/frankmuthomi
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <GlobeIcon className="text-primary" />
                <a href="https://frank-muthomi-portfolio-ssen.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  frank-muthomi-portfolio-ssen.vercel.app
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

