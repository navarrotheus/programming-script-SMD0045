import { useState, useEffect } from 'react';
import { Header, Container, Content, Title, List } from './styles';
import { FiSearch } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import CityCard from '../../components/CityCard';
import citiesMock from '../../cities.mock';
import removeAccents from '../../utils/removeAccents';

const Cities = () => {
    const [cities, setCities] = useState(citiesMock);
    const [cityName, setCityName] = useState("");
    const [isInputFocused, setIsInputFocused] = useState(false);

    useEffect(() => {
        if (cityName) {
            const filteredCities = citiesMock.filter(city =>
                removeAccents(city.name).match(new RegExp(cityName, "gi"))
            );
            setCities(filteredCities);
        } else {
            setCities(citiesMock);
        }
    }, [cityName])

    return (
        <Container>
            <Header isInputFocused={isInputFocused} isInputFilled={!!cityName}>
                <img src={Logo} alt="Logo"/>

                <div>

                    <FiSearch/>
                    <input 
                        type="text"
                        value={cityName}
                        placeholder="Qual cidade você procura?"
                        onChange={e => setCityName(e.target.value)}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                    />
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
                    {cities.map(city =>
                        <CityCard
                            image={city.image}
                            name={city.name}
                            localQuantity={city.localQuantity}
                        />)
                    }
                </List>
            </Content>
        </Container>
    );
}

export default Cities;