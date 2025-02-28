import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;

export const Heading = styled.div`
    margin-top: 16.5vh;
    text-align: center;

    > h1 {
        font-weight: 500;
        font-size: 72px;
        line-height: 90px;
        color: white;
    }
    > h2 {
        font-weight: normal;
        font-size: 24px;
        line-height: 20px;
        color: white;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 130px;

    > button {
        background:#fff;
        color: black;
        width: 17rem;

        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 5px;
        border: none;
        outline: 0;
        cursor: pointer;

        &.white {
            background:#3457b1;
            color: #fff;
        }
        & + button {
            margin: 10px 0 0;
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        margin-bottom: 90px;

        > button + button {
            margin: 0 0 0 10px
        }
    }
`;