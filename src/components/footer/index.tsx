function Footer() {

    const linkStyle = {
        color: 'grey',
        textDecoration: 'none',
        margin: '0 10px',
    };

    return (
        <footer style={{
            padding: '20px',
            textAlign: 'center',
        }}>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                <p>
                    <a href="#" style={linkStyle}>
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a href="#" style={linkStyle}>
                        Terms of Service
                    </a>
                    <span>|</span>
                    <a href="#" style={linkStyle}>
                        Contact Us
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
