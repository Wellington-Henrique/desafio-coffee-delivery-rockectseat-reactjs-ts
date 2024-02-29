import styled from "styled-components";

export const ProductListContainer = styled.div`
    h2 {
        font-family: 'Baloo 2', sans-serif;
        font-size: ${({theme}) => theme['title-l-font-size']};
        line-height: ${({theme}) => theme['title-l-font-line-height']};
        font-weight: ${({theme}) => theme['title-l-font-weight']};
        color: ${({theme}) => theme['base-subtitle']};
    }
`

export const ProductListContent = styled.div`
    margin-top: 3.75rem;

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

`