import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, BookOpen, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About JC Academy</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Empowering Dreams Since 2018
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              JC Academy has been a beacon of academic excellence, guiding students towards their dreams with
              dedication, innovation, and proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To provide world-class coaching and mentorship that transforms students into confident, capable
                individuals ready to excel in competitive examinations and beyond. We believe in nurturing not just
                academic excellence but also character development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Excellence in Education</h3>
                    <p className="text-muted-foreground">
                      Delivering top-quality coaching with innovative teaching methods
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Student-Centric Approach</h3>
                    <p className="text-muted-foreground">
                      Focusing on individual needs and personalized learning paths
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Innovation in Teaching</h3>
                    <p className="text-muted-foreground">Incorporating modern technology and proven methodologies</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/modern-classroom-discussion.jpg"
                alt="JC Academy classroom"
                className="rounded-lg shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From humble beginnings to becoming a leading coaching institute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift bg-card">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2018</div>
                <CardTitle>Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Started with a vision to provide quality education and a small batch of 20 dedicated students.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2021</div>
                <CardTitle>Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Expanded to multiple courses and achieved our first 100% success rate in JEE Advanced.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2024</div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Now serving 5000+ students with state-of-the-art facilities and digital learning platforms.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift border-border">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We strive for excellence in every aspect of education, from curriculum design to student support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Honest, transparent, and ethical practices in all our interactions with students and parents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Continuously evolving our teaching methods and embracing new technologies for better learning.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
        Our Directors
      </h2>
      <p className="text-xl text-muted-foreground">
        Visionary leaders guiding JC Academy with passion, integrity, and commitment to academic excellence.
      </p>
    </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center place-items-center">

      <Card className="hover-lift bg-card">
        <CardContent className="pt-6 text-center">
          <img
            src="/professional-male-teacher.jpg"
            alt="Mr. Abdul Suffaidh"
            className="h-32 w-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-foreground mb-2">Mr. Abdul Suffaidh</h3>
          <p className="text-primary font-medium mb-2">
            Director, Chemistry Faculty, JC Academy
          </p>
        </CardContent>
      </Card>

      <Card className="hover-lift bg-card">
        <CardContent className="pt-6 text-center">
          <img
            src="/professional-female-teacher.png"
            alt="Mr. Muhammed Suffaidh"
            className="h-32 w-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-foreground mb-2">Mr. Muhammed Suffaidh</h3>
          <p className="text-primary font-medium mb-2">
            Director, Physics Faculty, JC Academy
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

    </div>
  )
}
