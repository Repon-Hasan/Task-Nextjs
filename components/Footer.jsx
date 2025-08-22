export default function Footer() {
  return (
  <footer className="bg-gray-100 border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top section: About + Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About NextShop</h3>
            <p className="text-gray-600 text-sm">
              NextShop is your one-stop online platform for high-quality products. We focus on delivering a seamless shopping experience with fast checkout, secure payments, and reliable service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  Login
                </a>
              </li>
              <li>
                <a href="/signup" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900 hover:underline transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with Us</h3>
            <p className="text-gray-600 text-sm mb-4">
              Email: <a href="mailto:support@nextshop.com" className="hover:underline">support@nextshop.com</a><br/>
              Phone: <a href="tel:+8801626080591" className="hover:underline">+880 1626 080591</a>
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="mt-12 border-t pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME || "NextShop"}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
