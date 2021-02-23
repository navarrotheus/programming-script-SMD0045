import styled, { css } from 'styled-components';

import { darken } from 'polished';

export const Header = styled.header`
    background: #fff;
    padding: 16px 160px;
    border: 1px solid #DCE2E6;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        color: #A0ACB3;
        transition: 0.2s;
    }

    ${({ isInputFocused, isInputFilled }) => (isInputFocused || isInputFilled) && css`
        svg {
            color: #F25D27;
        }
    `}

    div {
        display: flex;
        align-items: center;
        padding: 11px;
        background: #F5F8FA;
        border: 1px solid #DCE2E6;
        border-radius: 10px;

        input {
            margin-left: 12px;
            border: 0;
            color: #123952;
            width: 400px;

            ::placeholder {
                color: #A0ACB3;
            }

            background: 0;
        }
    }

    button {
        background: #DDE9F0;
        border-radius: 10px;
        padding: 12px 32px;
        border: 0;
        color: #115D8C;
        transition: 0.3s;

        :hover {
            color: ${darken(0.1, "#115D8C")};
            background: ${darken(0.1, "#DDE9F0")};
        }
    }

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 160px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 64px;

    h3 {
        font-family: Barlow;
        font-weight: 600;
        font-size: 36px;
        color: #123952;
    }

    div {
        display: flex;
        p {
            color: #A0ACB2;
            font-family: Roboto;
            font-weight: normal;
            font-size: 16px;
            margin-right: 32px;
            cursor: pointer;
            transition: 0.3s;

            :hover {
                color: ${darken(0.2, "#A0ACB2")};
            }

            :last-child {
                margin-right: 0px;
            }

            &.selected {
                color: #123952;
                font-family: Roboto;
                font-weight: bold;
                font-size: 16px;
                cursor: auto;
            }
        }
    }


`;

export const List = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: 254px 254px 254px 254px 254px;
    justify-content: space-between;

    > div {
        margin-bottom: 32px;
    }
`;