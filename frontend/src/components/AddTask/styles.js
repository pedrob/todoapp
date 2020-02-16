import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	max-width: 500px;
	width: 100%;
	input {
		width: 90%;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 4px;
	}
	button {
		background-color: #3db37f;
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 50%;
		margin-left: 10px;
		cursor: pointer;
	}
`;
