import styled from 'styled-components';

export default styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 30px;
	width: 100%;
	border-bottom: 2px solid #5a5a5a2b;

	menu {
		display: flex;
	}

	.shop_basket span {
		margin-right: 5px;
		font-size: 2rem;
		font-weight: bold;
		-webkit-text-stroke: black;
		-webkit-text-stroke-width: 2px;
		-webkit-text-fill-color: #2efadf;
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
