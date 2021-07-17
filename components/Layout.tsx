import React from 'react';
import NavBar from './NavBar';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default Layout;
