import Card from 'react-bootstrap/Card';
import hop from '../../img/house-of-pasta.jpg';
const Memories = () => {
	return (
		<div className="container">
			<div className="memories">
				<h3>Memories:</h3>

				<Card style={{ width: '15rem' }}>
					<Card.Img variant="top" src={hop} />
					<Card.Body>
						<Card.Title>House of Pasta</Card.Title>
						<Card.Text>Mayuka: You are not hot!!</Card.Text>
					</Card.Body>
				</Card>

				{/* <Card style={{ width: '15rem' }}>
					<Card.Img variant="top" src={hop} />
					<Card.Body>
						<Card.Title>House of Pasta</Card.Title>
						<Card.Text>Mayuka: You are not hot!!</Card.Text>
					</Card.Body>
				</Card> */}
			</div>
		</div>
	);
};

export default Memories;
