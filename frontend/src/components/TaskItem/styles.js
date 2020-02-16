import styled from 'styled-components';

export const Item = styled.li`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
	padding: 20px 5px 5px 5px;
	margin-bottom: 10px;
	list-style: none;
	border: 1px solid #ccc;
	box-shadow: 0 1px 2px #ccc;
	border-radius: 4px;

	strike {
		color: #ccc;
	}

	strike,
	span,
	input {
		margin-left: 10px;
		font-size: 20px;
	}

	input {
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		font-size: 16px;
		background: #3db37f;
		border: none;
		border-radius: 4px;
		color: #fff;
		transition: background 0.5s;
	}

	button:hover {
		background: #59cc98;
	}

	button {
		cursor: pointer;
	}

	.wrapper {
		width: 100%;
		margin-top: 5px;
	}

	.card-content {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		padding: 4px;
	}

	.incomplete {
		background: #fff;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		border: 2px solid #ccc;
		border-radius: 50%;
	}

	.complete {
		background: #3db37f;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	.incomplete:hover {
		border: 2px solid #3db37f;
		.check-incomplete {
			color: #3db37f;
		}
	}

	.check-incomplete {
		color: #ccc;
	}

	.check-complete {
		color: #fff;
	}
`;
