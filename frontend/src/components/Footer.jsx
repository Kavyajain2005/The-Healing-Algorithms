import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 py-4">
            <div className="container text-center">
                <p>&copy; 2025 TeleHealth App. All Rights Reserved.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="/about" className="text-white text-decoration-none">
                            About
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <span className="mx-2">|</span>
                    </li>
                    <li className="list-inline-item">
                        <a href="/privacy-policy" className="text-white text-decoration-none">
                            Privacy Policy
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <span className="mx-2">|</span>
                    </li>
                    <li className="list-inline-item">
                        <a href="/terms-of-service" className="text-white text-decoration-none">
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
