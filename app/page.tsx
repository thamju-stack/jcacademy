import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, Target, ArrowRight, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🏆 Top Ranked Coaching Institute
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-montserrat">
                Unlock Your Potential with <span className="text-primary">JC Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your dreams into reality with our expert guidance, proven methodologies, and personalized
                approach to entrance exam preparation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" passHref>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                {/* 
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Free Consultation
                </Button>
                Stats Section */}
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero.jpg"
                alt="Students learning at JC Academy"
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-primary-foreground/80">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Expert Faculty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
              Why Choose JC Academy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive coaching with a focus on individual growth and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift border-border">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Learn from experienced educators with proven track records in competitive exam preparation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Small Batches</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Personalized attention with limited students per batch for better learning outcomes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardHeader className="text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Consistent top rankings and selections in premier institutes across the country.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Focused Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Targeted preparation strategies tailored to specific entrance examinations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">Our Popular Courses</h2>
            <p className="text-xl text-muted-foreground">Comprehensive coaching programs designed for success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">JEE Main & Advanced</CardTitle>
                <CardDescription>Engineering Entrance Preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Comprehensive syllabus coverage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Regular mock tests
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Doubt clearing sessions
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">NEET</CardTitle>
                <CardDescription>Medical Entrance Preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Biology, Physics, Chemistry
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    NCERT focused approach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Previous year analysis
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Foundation Courses</CardTitle>
                <CardDescription>Class 8th to 12th Preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Strong conceptual base
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Board exam preparation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Early entrance prep
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
              What Our Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "JC Academy transformed my approach to JEE preparation. The faculty's dedication and personalized
                  guidance helped me secure admission to IIT Delhi."
                </p>
                <div className="flex items-center">
                  <img src="/male-student-profile.jpg" alt="Student" className="h-12 w-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">Dushyanth Gopal</div>
                    <div className="text-sm text-muted-foreground">IIT Delhi, Computer Science</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The structured approach, consistent guidance, and regular assessments at JC Academy greatly helped me crack NEET with an excellent rank and boosted my confidence. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img src="/student-profile.png" alt="Student" className="h-12 w-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">Aswin Raj</div>
                    <div className="text-sm text-muted-foreground">AIIMS Delhi, MBBS</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                Read More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">Ready to Start Your Success Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of successful students who achieved their dreams with JC Academy. Book your free consultation
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact ">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Book Free Consultation
            </Button>
            </Link>
            {/*
            <Link href="/enquiry">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Apply Now
              </Button>
            </Link>
            */}
          </div>
        </div>
      </section>
    </div>
  )
}
