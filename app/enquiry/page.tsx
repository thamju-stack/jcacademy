"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, User, BookOpen, Phone, Mail } from "lucide-react"

export default function EnquiryPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your enquiry has been submitted successfully. Our team will contact you within 24 hours.
            </p>
            <Button
              onClick={() => setFormSubmitted(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit Another Enquiry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Enquiry Form</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Start Your Success Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out our detailed enquiry form to help us understand your goals and provide personalized guidance for
              your entrance exam preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Personal Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <User className="h-6 w-6 mr-2" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Please provide your basic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name *</label>
                      <Input placeholder="Enter your first name" required className="border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name *</label>
                      <Input placeholder="Enter your last name" required className="border-border" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                      <Input type="email" placeholder="Enter your email" required className="border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                      <Input type="tel" placeholder="Enter your phone number" required className="border-border" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Date of Birth *</label>
                      <Input type="date" required className="border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Gender *</label>
                      <Select required>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Complete Address *</label>
                    <Textarea
                      placeholder="Enter your complete address with city, state, and pincode"
                      required
                      className="border-border"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Academic Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <BookOpen className="h-6 w-6 mr-2" />
                    Academic Information
                  </CardTitle>
                  <CardDescription>Tell us about your current academic status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Current Class/Standard *</label>
                      <Select required>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Select your current class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8th">8th Standard</SelectItem>
                          <SelectItem value="9th">9th Standard</SelectItem>
                          <SelectItem value="10th">10th Standard</SelectItem>
                          <SelectItem value="11th">11th Standard</SelectItem>
                          <SelectItem value="12th">12th Standard</SelectItem>
                          <SelectItem value="12th-pass">12th Pass</SelectItem>
                          <SelectItem value="dropper">Dropper</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Board/University *</label>
                      <Select required>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Select your board" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cbse">CBSE</SelectItem>
                          <SelectItem value="icse">ICSE</SelectItem>
                          <SelectItem value="state">State Board</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">School/College Name *</label>
                      <Input placeholder="Enter your school/college name" required className="border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Current Percentage/CGPA</label>
                      <Input placeholder="Enter your current percentage or CGPA" className="border-border" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Stream (for 11th/12th students) *
                    </label>
                    <RadioGroup className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="science" id="science" />
                        <Label htmlFor="science">Science (PCM/PCB)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="commerce" id="commerce" />
                        <Label htmlFor="commerce">Commerce</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="arts" id="arts" />
                        <Label htmlFor="arts">Arts/Humanities</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Course Interest */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Course Interest</CardTitle>
                  <CardDescription>Which courses are you interested in?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Interested Courses * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="jee" />
                        <Label htmlFor="jee">JEE Main & Advanced</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="neet" />
                        <Label htmlFor="neet">NEET</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="foundation-9-10" />
                        <Label htmlFor="foundation-9-10">Foundation (Class 9-10)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="foundation-11-12" />
                        <Label htmlFor="foundation-11-12">Foundation (Class 11-12)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="crash-course" />
                        <Label htmlFor="crash-course">Crash Course</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="online" />
                        <Label htmlFor="online">Online Courses</Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Preferred Mode of Learning *
                    </label>
                    <RadioGroup className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="offline" id="offline" />
                        <Label htmlFor="offline">Offline Classes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="online" id="online-mode" />
                        <Label htmlFor="online-mode">Online Classes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid">Hybrid (Both)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Target Exam Year *</label>
                    <Select required>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select target exam year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Additional Information</CardTitle>
                  <CardDescription>Help us understand your specific needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Previous Coaching Experience
                    </label>
                    <RadioGroup className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="coaching-yes" />
                        <Label htmlFor="coaching-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="coaching-no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      How did you hear about JC Academy?
                    </label>
                    <Select>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="friend">Friend/Family Reference</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="website">Website/Google Search</SelectItem>
                        <SelectItem value="advertisement">Advertisement</SelectItem>
                        <SelectItem value="school">School/Teacher</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Specific Goals/Expectations
                    </label>
                    <Textarea
                      placeholder="Tell us about your specific goals, target colleges, or any special requirements..."
                      className="min-h-[100px] border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Questions/Comments</label>
                    <Textarea
                      placeholder="Any questions about our courses or additional comments..."
                      className="min-h-[100px] border-border"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Parent/Guardian Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <Phone className="h-6 w-6 mr-2" />
                    Parent/Guardian Information
                  </CardTitle>
                  <CardDescription>Contact details for parent or guardian</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Parent/Guardian Name *</label>
                      <Input placeholder="Enter parent/guardian name" required className="border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Relationship *</label>
                      <Select required>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Parent Phone Number *</label>
                      <Input type="tel" placeholder="Enter parent phone number" required className="border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Parent Email Address</label>
                      <Input type="email" placeholder="Enter parent email" className="border-border" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Parent Occupation</label>
                    <Input placeholder="Enter parent occupation" className="border-border" />
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Submit */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the terms and conditions and privacy policy. I consent to JC Academy contacting me
                        via phone, email, or SMS regarding my enquiry and course information.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm leading-relaxed">
                        I would like to receive updates about new courses, events, and educational content from JC
                        Academy.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                    >
                      Submit Enquiry
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Our counselors will contact you within 24 hours to discuss your requirements and provide
                      personalized guidance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-montserrat">Need Immediate Assistance?</h2>
            <p className="text-xl text-muted-foreground">Contact us directly for quick support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-card text-center">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our counselors</p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">+91 98765 43210</Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card text-center">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send us your questions anytime</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
                  admissions@jcacademy.com
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
