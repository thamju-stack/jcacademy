import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Target, Award } from "lucide-react"
import Link from "next/link";


export default function CoursesPage() {
  const courses = [
    {
      title: "JEE Main & Advanced",
      description: "Comprehensive engineering entrance preparation",
      duration: "2 Years",
      batchSize: "25 Students",
      eligibility: "Class 11th & 12th",
      features: [
        "Complete syllabus coverage",
        "Regular mock tests & assessments",
        "Doubt clearing sessions",
        "Previous year paper analysis",
        "Online study material",
        "Performance tracking",
      ],
      price: "₹1,20,000",
      popular: true,
    },
    {
      title: "NEET",
      description: "Medical entrance examination coaching",
      duration: "2 Years",
      batchSize: "30 Students",
      eligibility: "Class 11th & 12th",
      features: [
        "Biology, Physics, Chemistry",
        "NCERT focused approach",
        "Regular practice tests",
        "Medical entrance guidance",
        "Study material & notes",
        "Counseling support",
      ],
      price: "₹1,00,000",
      popular: false,
    },
    {
      title: "Foundation Course (Class 9-10)",
      description: "Strong foundation for future competitive exams",
      duration: "2 Years",
      batchSize: "20 Students",
      eligibility: "Class 9th & 10th",
      features: [
        "Conceptual clarity",
        "Board exam preparation",
        "Early competitive prep",
        "Interactive learning",
        "Regular assessments",
        "Parent-teacher meetings",
      ],
      price: "₹60,000",
      popular: false,
    },
    {
      title: "Foundation Course (Class 11-12)",
      description: "Advanced foundation with entrance preparation",
      duration: "2 Years",
      batchSize: "25 Students",
      eligibility: "Class 11th & 12th",
      features: [
        "Board + competitive prep",
        "Advanced problem solving",
        "Time management skills",
        "Mock test series",
        "Career counseling",
        "Study plan guidance",
      ],
      price: "₹80,000",
      popular: false,
    },
    {
      title: "Crash Course",
      description: "Intensive preparation for upcoming exams",
      duration: "6 Months",
      batchSize: "15 Students",
      eligibility: "Class 12th Pass",
      features: [
        "Intensive coaching",
        "Important topics focus",
        "Daily practice tests",
        "Revision sessions",
        "Exam strategies",
        "Last minute preparation",
      ],
      price: "₹50,000",
      popular: false,
    },
    {
      title: "Online Courses",
      description: "Flexible online learning programs",
      duration: "1-2 Years",
      batchSize: "Unlimited",
      eligibility: "Class 9th to 12th",
      features: [
        "Live interactive classes",
        "Recorded lectures",
        "Online doubt solving",
        "Digital study material",
        "Online test series",
        "24/7 support",
      ],
      price: "₹40,000",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Courses</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Choose Your Path to Success
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coaching programs designed to help you excel in competitive examinations and achieve your
              academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`hover-lift relative ${course.popular ? "border-primary shadow-lg" : "border-border"}`}
              >
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{course.batchSize}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Course Features:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <span className="text-muted-foreground text-sm">/{course.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Enroll Now
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent"
                      >
                        Get Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-muted-foreground">Comprehensive features that ensure your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift bg-card">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Structured Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Well-planned curriculum covering all topics systematically with regular revisions and practice
                  sessions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Learn from experienced teachers with proven track records and deep subject expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Small Batch Size</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Limited students per batch ensuring personalized attention and better learning outcomes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Choose the right course for your goals and take the first step towards success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link href="/contact" passHref>
    <Button
      size="lg"
      variant="secondary"
      className="bg-white text-primary hover:bg-white/90"
    >
      Schedule Counseling
    </Button>
  </Link>
</div>
        </div>
      </section>
    </div>
  )
}
