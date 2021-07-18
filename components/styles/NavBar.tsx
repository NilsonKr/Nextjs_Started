import styled from 'styled-components';

export default styled.nav`
	padding: 15px;
	width: 100%;
	border-bottom: 2px solid #5a5a5a2b;

	menu {
		display: flex;
	}

	a {
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: bold;
		color: black;
		margin: 0 10px;
	}

	.underscore--hover {
		width: 0;
		background-color: #6affeb;
		height: 3px;
		transition: 0.5s;
	}

	a:hover .underscore--hover {
		width: 100%;
	}
`;
