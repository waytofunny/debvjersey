import Link from 'next/link'
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="pb-2 text-2xl font-bold text-white relative group">
                DEBVJERSEY
                <span className="pb-1 absolute left-0 bottom-0 h-0.5 bg-yellow-500 w-0 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            <p className="text-sm">Curated collection of premium jerseys for true enthusiasts.</p>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                {/* <FaInstagram className="h-5 w-5" /> */}Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                {/* <FaTwitter className="h-5 w-5" /> */}Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                {/* <FaYoutube className="h-5 w-5" /> */}Youtube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="pb-1 text-sm font-semibold uppercase tracking-wider text-white relative inline-block">
              EXPLORE
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-500 w-full"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="hover:text-yellow-500 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-yellow-500 transition-colors text-sm">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/featured" className="hover:text-yellow-500 transition-colors text-sm">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-yellow-500 transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="pb-1 text-sm font-semibold uppercase tracking-wider text-white relative inline-block">
              COMPANY
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-500 w-full"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-yellow-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-500 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-yellow-500 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-yellow-500 transition-colors text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="pb-1 text-sm font-semibold uppercase tracking-wider text-white relative inline-block">
              CONTACT
              <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-500 w-full"></span>
            </h3>
            <address className="not-italic text-sm">
              <p>123 Jersey Street</p>
              <p>Sports City, SC 90210</p>
              <p className="mt-2">Email: info@debvjersey.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">© {new Date().getFullYear()} DebvJersey. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs hover:text-yellow-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs hover:text-yellow-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}