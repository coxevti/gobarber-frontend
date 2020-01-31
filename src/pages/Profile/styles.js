import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px 0 auto;
    padding: 10px 30px;
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        input {
            background: rgba(0, 0, 0, 0.1);
            color: #fff;
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            margin: 0 0 10px;
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
        span {
            color: #ff4c4c;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }
        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }
        button {
            margin: 5px 0 0;
            height: 44px;
            background: #0099e5;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, '#0099e5')};
            }
        }
    }
    > button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #fd5c63;
        color: #fff;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
            background: ${darken(0.05, '#fd5c63')};
        }
    }
`;
