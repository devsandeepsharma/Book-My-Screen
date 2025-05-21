import Button from "../ui/Button";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-teal-400">About Us</a></li>
                        <li><a href="#" className="hover:text-teal-400">Careers</a></li>
                        <li><a href="#" className="hover:text-teal-400">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4">Support</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-teal-400">Help Center</a></li>
                        <li><a href="#" className="hover:text-teal-400">Contact Us</a></li>
                        <li><a href="#" className="hover:text-teal-400">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-teal-400">Terms of Use</a></li>
                        <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-teal-400">Cookies</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                    <form className="space-y-2">
                        <input type="email" placeholder="Your email" className="w-full p-2 border border-gray-300 rounded-md outline-0 border-2 focus:border-teal-500" />
                        <Button className="w-full p-2">Subscribe</Button>
                    </form>
                </div>
            </div>
            <div className="bg-gray-800 text-center py-4">
                <p className="text-sm">&copy; 2025 BookMyScreen. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;