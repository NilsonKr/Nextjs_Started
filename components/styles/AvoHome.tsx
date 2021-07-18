import styled from 'styled-components';

export const ProductsListStyled = styled.section`
	width: 100%;
	max-width: 700px;
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	gap: 30px;
	place-content: center;
`;

export const ProductItemStyled = styled.div`
	position: relative;
	color: black;
	text-decoration: none;
	border-radius: 5px;
	overflow: hidden;

	.description {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 70px;
		padding-top: 10px;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
		text-align: center;
		background-color: #fff;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
	}

	em {
		color: gray;
	}
`;
