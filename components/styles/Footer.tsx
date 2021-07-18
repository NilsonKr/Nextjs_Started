import styled from 'styled-components';

export const FooterStyled = styled.footer`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	margin-top: 30px;
	padding: 20px 0;
	background-color: #fff;
`;

export const ColophonStyled = styled.section`
	text-align: center;
	font-size: 0.8rem;

	a {
		color: #00dbbe;
	}
`;

export const ReferencesStyled = styled.section`
	width: 40%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;

	div {
		text-align: center;
	}

	a {
		text-decoration: none;
		font-weight: bold;
		color: black;
		margin: 0 3px;
	}

	.nextjs_course a {
		color: #0075f4;
	}
`;
