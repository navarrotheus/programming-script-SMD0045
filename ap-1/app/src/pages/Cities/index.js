import { Header, Container, Content, Title, List } from './styles';
import Logo from '../../assets/logo.svg';
import Procurar from '../../assets/Procurar.svg';
import CityCard from '../../components/CityCard';
import City1 from '../../assets/cities/city1.jpg'
import City2 from '../../assets/cities/city2.jpg'
import City3 from '../../assets/cities/city3.jpg'
import City4 from '../../assets/cities/city4.jpg'
import City5 from '../../assets/cities/city5.jpg'
import City6 from '../../assets/cities/city6.jpg'
import City7 from '../../assets/cities/city7.jpg'
import City8 from '../../assets/cities/city8.jpg'
import City9 from '../../assets/cities/city9.jpg'
import City10 from '../../assets/cities/city10.jpg'

const Cities = () => {
    return (
        <Container>
            <Header>
                <img src={Logo} alt="Logo"/>

                <div>
                    <img src={Procurar} alt="Procurar"/>
                    <input placeholder="Qual cidade você procura?" />
                </div>

                <button>Sair</button>
            </Header>
            <Content>
                <Title>
                    <h3>Selecione uma cidade</h3>
                    <div>
                        <p className="selected">Todas</p>
                        <p>Mais acessadas</p>
                        <p>A-Z</p>
                    </div>
                </Title>
                <List>
                    <CityCard image={City1} name="Águas mornas" localQuantity={13}/>
                    <CityCard image={City2} name="Bombinhas" localQuantity={43}/>
                    <CityCard image={City3} name="Blumenau" localQuantity={16}/>
                    <CityCard image={City4} name="Florianópolis" localQuantity={22}/>
                    <CityCard image={City5} name="Imbituba" localQuantity={8}/>
                    <CityCard image={City6} name="Jaraguá do Sul" localQuantity={19}/>
                    <CityCard image={City7} name="Lages" localQuantity={25}/>
                    <CityCard image={City8} name="Rio do Sul" localQuantity={20}/>
                    <CityCard image={City9} name="Jericoacoara" localQuantity={34}/>
                    <CityCard image={City10} name="Pipa" localQuantity={33}/>
                </List>
            </Content>
        </Container>
    );
}

export default Cities;