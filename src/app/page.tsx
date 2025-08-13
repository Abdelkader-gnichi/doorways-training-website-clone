import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, Menu, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                Door<span className="text-purple-600">w</span>ays
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
                  <span>About Us</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
                  <span>Our Work</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
                  <span>PI Training</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
                  <span>STEP Training</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                Contact Us
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Doorways
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
              We are a non-profit organization and we are passionate about creating positive impact via
              entrepreneurship education and empowering people.
            </p>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
            >
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We promote entrepreneurship education by developing, implementing, and evaluating interventions
                and training programs that foster entrepreneurial thinking and behavior. In our training programs,
                we use evidence-based training contents and apply action-oriented training approaches.
              </p>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
              >
                Read More
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/463504954/2473734139.jpeg"
                alt="Training session"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Training Programs
          </h2>
          <p className="text-lg text-gray-700 mb-16 text-center max-w-4xl mx-auto">
            In addition to developing new training programs, we are certified providers of the{" "}
            <strong>Personal Initiative (PI) Training</strong> and the <strong>STEP Training</strong>.
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* PI Training */}
            <div className="space-y-8">
              <div>
                <Image
                  src="https://ext.same-assets.com/463504954/361611839.png"
                  alt="PI Training group session"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  PI Training
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Personal Initiative (PI) Training is a psychological program mainly targeted at entrepreneurs.
                  It has been developed within the Frese Group and been implemented in the context of several
                  internationally funded research projects in Africa, Asia, Latin America, and the Caribbean.
                  Research indicated that it can be more effective than traditional business training programs.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
                >
                  Read More
                </Button>
              </div>
            </div>

            {/* STEP Training */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  STEP Training
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  STEP (Student Training for Entrepreneurial Promotion) is an entrepreneurship training program
                  targeted particularly at young adults with limited or no entrepreneurial experience. It was
                  founded by the Frese Group in 2008 and has since been implemented in partnership with more
                  than two dozen institutions in low- and middle-income countries around the world. Research
                  shows that it is highly effective in increasing the likelihood of successful business start-up.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
                >
                  Read More
                </Button>
              </div>
              <div>
                <Image
                  src="https://ext.same-assets.com/463504954/2717432497.jpeg"
                  alt="STEP Training participant"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Projects
            </h2>
            <div className="mb-8">
              <Image
                src="https://ext.same-assets.com/463504954/2295403861.png"
                alt="World map showing project locations"
                width={800}
                height={400}
                className="mx-auto"
              />
            </div>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
            >
              View Projects
            </Button>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Examplary Projects
            </h3>
            <p className="text-lg text-gray-700 mb-12">
              See some examples of our work
            </p>

            <div className="space-y-12">
              {/* Project 1 */}
              <div className="grid lg:grid-cols-4 gap-8 items-start border-b border-gray-200 pb-12">
                <div>
                  <Image
                    src="https://ext.same-assets.com/463504954/2578139055.png"
                    alt="India project"
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:col-span-3">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    India: PI Training for Rural Entrepreneurs in Tamil Nadu
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Together with The World Bank's South Asia Region Gender Innovation Lab (SAR GIL) and
                    the local implementation partner Hand In Hand India we are conducting a randomized
                    controlled trial (RCT) impact evaluation study to investigate the effect of the
                    Personal Initiative (PI) Training among small-scale entrepreneurs.
                  </p>
                  <Button
                    variant="link"
                    className="text-purple-600 hover:text-purple-700 p-0"
                  >
                    Read more
                  </Button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="grid lg:grid-cols-4 gap-8 items-start border-b border-gray-200 pb-12">
                <div>
                  <Image
                    src="https://ext.same-assets.com/463504954/2578139055.png"
                    alt="Lesotho project"
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:col-span-3">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Lesotho: PI Training for Small-Scale Entrepreneurs
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Pathways to Sustainable Livelihoods Project in Lesotho aims to enhance the economic
                    stability of poor and vulnerable households in the country by providing them with the
                    tools and training needed to improve their economic resilience.
                  </p>
                  <Button
                    variant="link"
                    className="text-purple-600 hover:text-purple-700 p-0"
                  >
                    Read more
                  </Button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="grid lg:grid-cols-4 gap-8 items-start">
                <div>
                  <Image
                    src="https://ext.same-assets.com/463504954/673274863.jpeg"
                    alt="Mozambique project"
                    width={200}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:col-span-3">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Mozambique: STEP/PI Training for Female Farmers
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under the auspices of a World Bank project led by the Trade and Competitiveness Global
                    Practice, the World Bank's Africa Gender Innovation Lab (GIL) conducted a randomized
                    controlled trial (RCT) study to measure the impact of a training intervention.
                  </p>
                  <Button
                    variant="link"
                    className="text-purple-600 hover:text-purple-700 p-0"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
              >
                View All
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center mb-12">
            <Image
              src="https://ext.same-assets.com/463504954/3719679158.png"
              alt="FAO Partner"
              width={150}
              height={80}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://ext.same-assets.com/463504954/945977954.png"
              alt="Business Innovation Partner"
              width={150}
              height={80}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://ext.same-assets.com/463504954/989840634.png"
              alt="Gender Innovation Lab Partner"
              width={150}
              height={80}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://ext.same-assets.com/463504954/2751070813.png"
              alt="IFC Partner"
              width={150}
              height={80}
              className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
            >
              View All
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            Want to know more about the minds and hearts behind the non-profit organization Doorways?
            Meet our team and learn more about our vision, mission, and values.
          </p>
          <div className="mb-12">
            <Image
              src="https://ext.same-assets.com/463504954/3509108229.jpeg"
              alt="Doorways team photo"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3"
            >
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Doorways gGmbH</h3>
              <div className="space-y-2 text-purple-100">
                <p>Wiesenweg 2</p>
                <p>21406 Barnstedt</p>
                <div className="flex items-center space-x-2 mt-4">
                  <Phone className="w-4 h-4" />
                  <span>+49 (0) 4134 - 9099726</span>
                </div>
                <p>Fax: +49 (0) 4134 - 9099726</p>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@doorways-training.org</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Instagram className="w-6 h-6 text-purple-100 hover:text-white cursor-pointer" />
                <Linkedin className="w-6 h-6 text-purple-100 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* About Us Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">About Us</h3>
              <ul className="space-y-2 text-purple-100">
                <li><a href="#" className="hover:text-white">Who We Are</a></li>
                <li><a href="#" className="hover:text-white">What We Do</a></li>
                <li><a href="#" className="hover:text-white">Our Projects</a></li>
                <li><a href="#" className="hover:text-white">Our Partners</a></li>
              </ul>
            </div>

            {/* Training Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Training</h3>
              <ul className="space-y-2 text-purple-100">
                <li><a href="#" className="hover:text-white">STEP Training</a></li>
                <li><a href="#" className="hover:text-white">STEP Training Publications</a></li>
                <li><a href="#" className="hover:text-white">STEP Training Impact</a></li>
                <li><a href="#" className="hover:text-white">PI Training</a></li>
                <li><a href="#" className="hover:text-white">PI Training Impact</a></li>
                <li><a href="#" className="hover:text-white">PI Training Publications</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-purple-300 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex space-x-6 text-purple-100 text-sm">
                <a href="#" className="hover:text-white">Imprint</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>
              <a href="#" className="text-purple-100 hover:text-white text-sm mt-4 lg:mt-0">
                to top ▲
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
