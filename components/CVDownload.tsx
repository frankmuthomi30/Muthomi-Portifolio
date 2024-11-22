// Mark this file as a Client Component
"use client";

import { Button } from "../@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../@/components/ui/card"
import { FileDown } from 'lucide-react'

export function CVDownload() {
  const handleDownload = () => {
    // The CV file is in the public folder, which is automatically served statically
    const cvUrl = '/Frank_Muthomi_CV.pdf'
    
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = cvUrl
    link.setAttribute('download', 'Frank_Muthomi_CV.pdf') // Set the desired file name
    document.body.appendChild(link)
    
    // Trigger the download
    link.click()
    
    // Clean up
    document.body.removeChild(link)
  }

  return (
    <section id="cv-download" className="py-20 bg-gradient-to-t from-background to-muted">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Download My CV</CardTitle>
            <CardDescription className="text-center">Get a comprehensive overview of my skills and experience</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button size="lg" className="mt-4" onClick={handleDownload}>
              <FileDown className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CVDownload
