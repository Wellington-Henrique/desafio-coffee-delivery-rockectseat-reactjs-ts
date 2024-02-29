import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.5rem;

    img {
        height: 2.5rem;
    }

    div {
        display: flex;
        gap: 0.5rem;
        
        span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;

            border-radius: 6px;
            font-size: 1.125rem;
            color: ${({theme}) => theme['purple-dark']};
            background-color: ${({theme}) => theme['purple-light']};

            svg {
                fill: ${({theme}) => theme['purple-dark']}
            }
        }

        button {
            border: 0;
            background-color: ${({theme}) => theme['yellow-light']};
            padding: 0.5rem;
            border-radius: 6px;

            svg {
                fill: ${({theme}) => theme['yellow-dark']}
            }
        }
    }
`