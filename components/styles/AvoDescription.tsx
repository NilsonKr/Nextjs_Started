import styled from 'styled-components';

export const GeneralDescStyled = styled.section`
	display: flex;
	width: clamp(320px, 100%, 700px);
	justify-content: space-between;
	align-items: center;
	margin: 30px auto;

	img {
		border-radius: 20px;
	}

	.general_description em {
		display: block;
		color: #535353;
		font-size: 1.2rem;
		margin: 10px 0;
	}
`;

export const AddFieldStyled = styled.div`
	display: flex;

	input {
		max-width: 55%;
		padding: 10px;
		outline: none;
		border: 1px solid gray;
		background-color: #fff;
		font-size: 1.2rem;
		border-bottom-left-radius: 10px;
		border-top-left-radius: 10px;
	}

	button {
		outline: none;
		border: none;
		padding: 7px;
		background-color: #27c2ff;
		color: white;
		border-radius: 0;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 10px;
	}

	input:focus {
		border: 1px solid #2ef6ca;
	}
`;

export const AboutStyled = styled.div`
	max-width: 700px;
	padding: 20px;
	background-color: #e6e6e6;
	border-radius: 10px;
	margin: 0 auto;
	font-style: italic;

	h2::before {
		content: ' ';
		display: inline-block;
		width: 4px;
		height: 20px;
		background-color: #797979;
		margin-right: 5px;
	}

	p {
		margin-top: 5px;
		color: #535353ce;
	}
`;
