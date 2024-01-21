import React, { useEffect, useState } from 'react';

interface ILeftNavbarProps {
    handleNavbarClose: () => void;
    showNavbar: boolean;
}

const LeftNavbar: React.FC<ILeftNavbarProps> = ({ handleNavbarClose, showNavbar }) => {

    const [isScreenSmall, setIsScreenSmall] = useState(false)

    useEffect(() => {
        if(window.innerWidth >= 900){
            setIsScreenSmall(true)
        }

    })


    const handleSmoothScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId)?.offsetTop;
        if (targetElement) {
            window.scrollTo({
                top: targetElement - 50,
                behavior: 'smooth',
            });

            handleNavbarClose();
        }
    };

    return (
        <div
            style={{
                width: showNavbar ? '200px' : '0',
                position: 'fixed',
                zIndex: 10,
                left: '0',
                top: '0',
                height: '100vh',
                backgroundColor: isScreenSmall ? 'rgb(17, 17, 17, 0.7)' : 'rgb(0, 0, 0, 0.9)',
                padding: '20px',
                transition: 'width 1s ease',
            }}
        >
            <div style={{ color: 'white', marginBottom: '20px', cursor: 'pointer' }}>
                <p
                    onClick={() => handleSmoothScroll('services')}
                    style={{ margin: '0', textDecoration: 'none', color: 'white' }}
                >
                    Our Services
                </p>
            </div>
            <div style={{ color: 'white', marginBottom: '20px', cursor: 'pointer' }}>
                <p
                    onClick={() => handleSmoothScroll('gallery')}
                    style={{ margin: '0', textDecoration: 'none', color: 'white' }}
                >
                    Gallery
                </p>
            </div>
            <div style={{ color: 'white', cursor: 'pointer' }}>
                <p
                    onClick={() => handleSmoothScroll('contact')}
                    style={{ margin: '0', textDecoration: 'none', color: 'white' }}
                >
                    Contact Us
                </p>
            </div>
        </div>
    );
};

export default LeftNavbar;
