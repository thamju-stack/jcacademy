import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight } from "lucide-react"
import Link from "next/link";


export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Anwar Shah",
      achievement: "IIT Delhi, Computer Science",
      image: "/anvar.png",
      rating: 5,
      text: "JC Academy transformed my approach to JEE preparation. The faculty's dedication and personalized guidance helped me secure admission to IIT Delhi. The regular mock tests and doubt clearing sessions were invaluable.",
      year: "2024",
    },
    {
      id: 2,
      name: "Ajin Raj",
      achievement: "AIIMS Delhi, MBBS",
      image: "/female-student-profile.png",
      rating: 5,
      text: "The structured approach and regular assessments at JC Academy helped me crack NEET with an excellent rank. The biology faculty's teaching methodology was exceptional. Highly recommended!",
      year: "2024",
    },
    {
      id: 3,
      name: "Gouri",
      achievement: "IIT Bombay, Mechanical Engineering",
      image: "/placeholder-1w51l.png",
      rating: 5,
      text: "The foundation course at JC Academy gave me a strong base in mathematics and physics. The teachers were always available for doubt clearing, and the study material was comprehensive.",
      year: "2023",
    },
    {
      id: 4,
      name: "Ashika AS",
      achievement: "JIPMER, MBBS",
      image: "/smiling-female-student-profile.png",
      rating: 5,
      text: "JC Academy's NEET preparation program is outstanding. The focus on NCERT and regular practice tests helped me achieve my dream of becoming a doctor. Thank you to all the teachers!",
      year: "2023",
    },
    {
      id: 5,
      name: "Sharath Gosh",
      achievement: "IIT Kanpur, Electrical Engineering",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The crash course at JC Academy was intense but highly effective. In just 6 months, I was able to improve my rank significantly. The faculty's expertise and dedication are commendable.",
      year: "2024",
    },
    {
      id: 6,
      name: "Shibil",
      achievement: "AFMC, MBBS",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The online courses during the pandemic were a lifesaver. The interactive sessions and digital study material helped me stay on track. JC Academy truly cares about student success.",
      year: "2023",
    },
  ]

  const parentTestimonials = [
    {
      id: 1,
      name: "Mr. Rajan UK",
      relation: "Father of Ajin Raj",
      text: "JC Academy not only helped my son academically but also developed his confidence and problem-solving skills. The regular parent-teacher meetings kept us informed about his progress.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Mrs. Reeja K",
      relation: "Mother of Dushaynth Gopal",
      text: "The faculty at JC Academy is exceptional. They treated my son like their own child and provided the guidance he needed to succeed in NEET. We are forever grateful.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const successStats = [
    { number: "500+", label: "IIT Selections" },
    { number: "800+", label: "NEET Qualifiers" },
    { number: "95%", label: "Success Rate" },
    { number: "15+", label: "Years of Excellence" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Success Stories</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Our Students' Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our successful students who achieved their dreams with JC Academy's guidance and support. Their
              success is our pride.
            </p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {successStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground">Real experiences from our successful students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-primary font-medium">{testimonial.achievement}</div>
                      <div className="text-sm text-muted-foreground">Class of {testimonial.year}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">What Parents Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by parents across the region</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {parentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift bg-card">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />

                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.relation}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">Video Testimonials</h2>
            <p className="text-xl text-muted-foreground">Hear directly from our successful students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden hover-lift">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Student Video Testimonial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4">
                  <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-semibold">Rahul Sharma</div>
                <div className="text-sm">IIT Delhi Success Story</div>
              </div>
            </div>

            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden hover-lift">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Student Video Testimonial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4">
                  <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-semibold">Priya Patel</div>
                <div className="text-sm">AIIMS Success Journey</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">Be the Next Success Story</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join JC Academy and write your own success story. Start your journey towards your dream college today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  )
}
