import logo from '../logo-2.png';

export default function Header() {
    return (
        <footer className="footer">
            <div className="container column">
            <div className="footer-img row-50">
                    <img href={logo} alt="logo-2" />
            </div>
                <div className="footer-text row-50">
                    <p>
                        Copywrite &copy; 2021 Little Lemon. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
  }