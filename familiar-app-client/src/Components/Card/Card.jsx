import styled from 'styled-components';

const Card = styled.div`
	background: ${(props) => props.backgroundColor || 'gray'};
	border: 2px solid mintcream;
	border-radius: 10px;
	color: ${(props) => props.color || 'black'};
	width: ${(props) => props.width || '150px'};
	height: ${(props) => props.height || '230px'};
	margin: 15px auto;
	padding: 1rem;
	display: ${(props) => props.display || 'block'};
	align-items: ${(props) => props.alignItems || 'center'};
	flex-direction: ${(props) => props.flexDirection || 'row'};
	justify-content: ${(props) => props.jusifyContent || 'space-between'};
`;

export default Card;
