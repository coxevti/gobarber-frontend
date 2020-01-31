import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    margin-bottom: 30px;
    label {
        cursor: pointer;
        position: relative;
        &:hover {
            opacity: 0.7;
        }
        svg {
            position: absolute;
            top: -30px;
            right: 0;
            background: #eee;
            border-radius: 50%;
            padding: 5px;
            margin: 5px;
        }
        img {
            height: 120px;
            width: 120px;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.3);
            background: #eee;
        }
        input {
            display: none;
        }
    }
`;
