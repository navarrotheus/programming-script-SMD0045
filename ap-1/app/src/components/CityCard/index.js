import { Container } from './styles';

const CityCard = ({ name, localQuantity, image }) => {
    return (
        <Container>
            <img src={image} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>{localQuantity} locais</p>
            </div>
        </Container>
    );
}

export default CityCard;