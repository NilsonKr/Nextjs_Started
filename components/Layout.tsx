import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
