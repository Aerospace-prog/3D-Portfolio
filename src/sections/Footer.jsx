const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 transition-all duration-500 animate-fadeIn">
            <div className="text-white-500 flex gap-2">
                <p className="cursor-pointer transition-colors duration-300 hover:text-white">Terms & Conditions</p>
                <p>|</p>
                <p className="cursor-pointer transition-colors duration-300 hover:text-white">Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a
                    href="https://github.com/Aerospace-prog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                >
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a
                    href="https://x.com/Kushagra22P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                >
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500 transition-colors duration-300 hover:text-white">© 2025 Kushagra Pandey. All rights reserved.</p>
        </footer>
    );
};

export default Footer;