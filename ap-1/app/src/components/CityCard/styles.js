import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    border: 1px solid #DCE2E6;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
        box-shadow: 5px 5px 10px #888888;
    }

    img {
        border-radius: 16px 16px 0px 0px;
        width: 253px;
        height: 175px;
    }

    div {
        display: flex;
        flex-direction: column;
        padding: 16px 32px;

        h3 {
            font-family: Barlow;
            font-weight: 600;
            font-size: 20px;
            color: #123952;
            margin-bottom: 4px;
        }

        p {
            color: #617480;
            font-family: Roboto;
            font-weight: normal;
            font-size: 16px;
        }
    }
`;
