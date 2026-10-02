"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import Link from "next/link";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState(false);


  

  const galleryItems = [
    {
      
      id: 1,
      src: "/1.jpg",
      alt: "Modern Classroom",
      category: "classrooms",
      title: "State-of-the-art Classrooms",
    },
    {
      id: 2,
      src: "/2.jpg",
      alt: "Success Celebration",
      category: "students",
      title: "Celebrating Success",
    },
    {
      id: 3,
      src: "/3.jpg",
      alt: "Science Laboratory",
      category: "facilities",
      title: "Well-equipped Laboratory",
    },
    {
      id: 4,
      src: "/modern-classroom-studying.png",
      alt: "Modern Classroom",
      category: "classrooms",
      title: "State-of-the-art Classrooms",
    },
    {
      id: 5,
      src: "/celebrating-students.png",
      alt: "Success Celebration",
      category: "students",
      title: "Celebrating Success",
    },
    {
      id: 6,
      src: "/science-laboratory.png",
      alt: "Science Laboratory",
      category: "facilities",
      title: "Well-equipped Laboratory",
    },
    {
      id: 7,
      src: "/annual-function-performance.png",
      alt: "Annual Function",
      category: "events",
      title: "Annual Function 2024",
    },
    {
      id: 8,
      src: "/library-students-reading.png",
      alt: "Library",
      category: "facilities",
      title: "Comprehensive Library",
    },
    {
      id: 9,
      src: "/group-study-session.png",
      alt: "Group Study",
      category: "students",
      title: "Collaborative Learning",
    },
    {
      id: 10,
      src: "/teacher-smartboard.jpg",
      alt: "Smart Classroom",
      category: "classrooms",
      title: "Interactive Learning",
    },
    {
      id: 11,
      src: "/trip.png",
      alt: "Workshop",
      category: "events",
      title: "Expert Workshop",
    },
    {
      id: 12,
      src: "/computer-lab-students.png",
      alt: "Computer Lab",
      category: "facilities",
      title: "Digital Learning Center",
    },
    
    
    
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Gallery</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Glimpses of JC Academy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our state-of-the-art facilities, vibrant student life, and memorable moments that make JC Academy
              a special place for learning.
            </p>
          </div>
        </div>
      </section>

      

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover-lift cursor-pointer overflow-hidden border-border">
                <CardContent className="p-0">
                  <div className="relative group" onClick={() => setSelectedImage(item.src)}>
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm">Click to view</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Video Section */}
<section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
        Campus Life & Success Reel
      </h2>
      <p className="text-xl text-muted-foreground">See how our students learn, grow, and excel</p>
    </div>

    <div className="max-w-4xl mx-auto">
<div className="relative aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden max-w-xs mx-auto">
        {/** Use state to toggle between placeholder and video */}
        {selectedVideo ? (
          <video
            src="/campus-tour.mp4" // replace with your video path
            autoPlay
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <>
            <img
              src="/vdothumb.png"
              alt="Campus Tour Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-6"
                onClick={() => setSelectedVideo(true)}
              >
                <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">Experience JC Academy Yourself</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Visit our campus and see our world-class facilities firsthand. Schedule a campus tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Schedule Campus Tour
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
