import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Get in Touch with JC Academy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our courses or want to schedule a consultation? We're here to help you start your
              journey to success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column (Address + Office Hours) */}
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-8 font-montserrat">
            Contact Information
            </h2>

          <Card className="hover:shadow-lg border-border">
            <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground">
            40/196, 2 nd floor, near juma masjid,
            <br />
            Areekkad, po, Nallalam,
            <br />
            Kozhikode, Kerala 673027
              </p>
            </div>
          </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-border">
            <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 07:00 AM - 05:30 PM</p>
              <p className="text-muted-foreground">Saturday and Sunday: 08:00 AM - 5:30 PM</p>
            </div>
          </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Phone + Email + Social) */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-montserrat text-center invisible">
            Placeholder
          </h2>

          <Card className="hover-lift border-border">
            <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
              <p className="text-muted-foreground">Main Office: +91 85940 54156</p>
              <p className="text-muted-foreground">Admissions: +91 85901 04509</p>
              <p className="text-muted-foreground">Student Support: +91 96331 47433</p>
            </div>
          </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-border">
            <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Email Addresses</h3>
              <p className="text-muted-foreground">General: jcacademytm@gmail.com</p>
              <p className="text-muted-foreground">Support: learnwithjcacademy@gmail.com</p>
            </div>
          </div>
            </CardContent>
          </Card>
        </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          
          <a
  href="https://www.instagram.com/_jcacademy_/" // replace with your Instagram link
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="icon"
    className="border-primary text-primary hover:bg-primary/5 bg-transparent"
  >
    <Instagram className="h-5 w-5" />
  </Button>
</a>

         
        </div>
          </div>
        </div>
      </section>



      {/* Map Section */}
<section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
        Find Us on the Map
      </h2>
      <p className="text-xl text-muted-foreground">
        Visit our campus and experience our facilities firsthand
      </p>
    </div>

    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      {/* Google Map iframe */}
      <div className="w-full h-96 sm:h-[500px] md:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.6544482985846!2d75.8022240750483!3d11.213182288963386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659a6c4e291df%3A0xeeac245b8a48d611!2sJC%20Academy!5e0!3m2!1sen!2sin!4v1759913125085!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div className="text-center mt-6">
      <a
        href="https://maps.app.goo.gl/86WQvX4ycTZSdSpX9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg">
          Open in Google Maps
        </button>
      </a>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card className="hover-lift border-border">
              <CardHeader>
                <CardTitle className="text-lg">What are your admission requirements?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Admission requirements vary by course. Generally, students should have completed the relevant grade
                  level and demonstrate commitment to their studies. Contact us for specific requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer online classes?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, we offer comprehensive online courses with live interactive sessions, recorded lectures, and
                  digital study materials. Our online platform provides the same quality education as our physical
                  classes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border">
              <CardHeader>
                <CardTitle className="text-lg">What is your fee structure?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our fees vary by course and duration. We offer flexible payment options and scholarships for deserving
                  students. Please contact our admissions team for detailed fee information.
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
            Don't wait! Contact us today to learn more about our courses and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="tel:+919876543210">
    <Button
      size="lg"
      variant="outline"
      className="border-white text-white hover:bg-white/10 bg-transparent"
    >
      Call Now: +91 98765 43210
    </Button>
  </a>
</div>

        </div>
      </section>
    </div>
  )
}
