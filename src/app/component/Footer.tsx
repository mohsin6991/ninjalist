import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
export default function Footer() {
    return (
        <div className="footer">
            <footer className="bg-gray-800 text-white p-8 mt-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    {/* Contact Info */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-2">Contact Us</h2>
                        <p className="flex items-center justify-center md:justify-start">
                            <span role="img" aria-label="location" className="mr-2">📍</span> 123 Main St, City, Country
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <span role="img" aria-label="phone" className="mr-2">📞</span> +1 (555) 123-4567
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <span role="img" aria-label="email" className="mr-2">📧</span> email@restaurant.com
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-2">Follow Us</h2>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-200">
                                <i className="fab fa-facebook-f text-white text-2xl"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-200">
                                <i className="fab fa-twitter text-white text-2xl"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-200">
                                <i className="fab fa-instagram text-white text-2xl"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-200">
                                <i className="fab fa-linkedin-in text-white text-2xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-2">Opening Hours</h2>
                        <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                    </div>
                </div>
                <div className="text-center mt-8 border-t border-gray-700 pt-4">
                    <p className="text-sm">© 2024 Restaurant Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
