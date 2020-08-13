import styled from 'styled-components';

const Card = styled.div`
	background: ${(props) => props.backgroundColor || 'gray'};
	border: 2px solid white;
	border-radius: 10px;
	width: 150px;
	height: 230px;
	margin: 15px auto;
	padding: 1rem;
`;

export default Card;
