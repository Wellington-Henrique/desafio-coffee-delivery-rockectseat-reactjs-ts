import styled from "styled-components";

export const IntroContainer = styled.div`
    height: 40.25rem;
    max-width: 1440px;
    padding: 0 10rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .intro-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-size: ${({theme}) => theme['title-xl-font-size']};
            line-height: ${({theme}) => theme['title-xl-font-line-height']};
            font-weight: ${({theme}) => theme['title-xl-font-weight']};
            color: ${({theme}) => theme['base-title']};
        }

        p {
            font-size: ${({theme}) => theme['text-l-font-size']};
            line-height: ${({theme}) => theme['text-l-font-line-height']};
            color: ${({theme}) => theme['base-subtitle']};
        }
    }

    .art-1 {
        width: 476px;
        height: 360px;
    }
`

export const SloganContainer = styled.div`  
    height: 5.25rem;

    display: flex;
    flex-wrap: wrap;

    div {
        width: 50%;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
            font-size: ${({theme}) => theme['text-m-font-size']};
            line-height: ${({theme}) => theme['text-m-font-line-height']};
            color: ${({theme}) => theme['base-subtitle']};
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({theme}) => theme['white']};
            border-radius: 50%;
            padding: 0.5rem;
        }

        .cart-ico { 
            background-color: ${({theme}) => theme['yellow-dark']};
        }

        .package-ico { 
            background-color: ${({theme}) => theme['yellow']};
        }

        .timer-ico { 
            background-color: ${({theme}) => theme['base-text']};
        }

        .coffee-ico { 
            background-color: ${({theme}) => theme['purple']};
        }
    }
`