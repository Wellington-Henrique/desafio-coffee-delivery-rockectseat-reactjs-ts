import styled from "styled-components";


export const ProductCardContainer = styled.div`
    max-width: 256px;
    min-height: 310px;

    background-color: ${({theme}) => theme['base-card']};

    display: flex;
    flex-direction: column;

    position: relative;

    align-items: center;

    padding: 0 1.25rem 1.25rem 1.25rem;

    border-radius: 0.375rem 1.875rem;

    img {
        width: 7.5rem;
        height: 7.5rem;

        margin-top: -1.25rem !important;
    }

    .categories-carroussel {
        margin-top: 0.75rem;
        display: flex;
        flex-direction: row;
        overflow-y: auto;

        gap: 0.25rem;
    }
    
    .category {
        display: inline-block;
        height: 21px;
        text-transform: uppercase;

        overflow: hidden;

        font-size: ${({theme}) => theme['tag-font-size']};
        line-height: ${({theme}) => theme['tag-font-line-height']};
        font-weight: ${({theme}) => theme['tag-font-weight']};
        color: ${({theme}) => theme['yellow-dark']};
        
        padding: 4px 8px;

        background-color: ${({theme}) => theme['yellow-light']};
        border-radius: 25px;
    }

    h3 {
        margin-top: 1rem;
        font-family: 'Baloo 2', sans-serif;
        font-size: ${({theme}) => theme['title-s-font-size']};
        line-height: ${({theme}) => theme['title-s-font-line-height']};
        font-weight: ${({theme}) => theme['title-s-font-weight']};
        color: ${({theme}) => theme['base-title']};
    }

    p {
        margin-top: 0.5rem;
        font-size: ${({theme}) => theme['text-s-font-size']};
        line-height: ${({theme}) => theme['text-s-font-line-height']};
    }

    .card-footer {
        width: 13rem;
        height: 2.375rem;

        position: absolute;
        bottom: 1.25rem;

        display: flex;
        align-items: center;

        justify-content: space-between;

        .price-container {
            display: flex;
            align-items: center;

            gap: 0.25rem;
            
            font-size: ${({theme}) => theme['text-s-font-size']};

            .price {
                font-family: 'Baloo 2', sans-serif;
                font-size: ${({theme}) => theme['title-m-font-size']};
                font-weight: ${({theme}) => theme['title-m-font-weight']};
            }
        }


        .add-remove-container {
            width: 4.5rem;
            height: 100%;

            background-color: ${({theme}) => theme['base-button']};
            font-size: ${({theme}) => theme['text-m-font-size']};
            color: ${({theme}) => theme['base-title']};
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            gap: 0.25rem;
            padding: 0.5rem;
            
            border-radius: 6px;

            button {
                height: 100%;
                border: 0;
                background-color: transparent;

                svg {
                    color: ${({theme}) => theme['purple']}; 
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }


        .btn-add-to-cart {
            height: 100%;

            border: 0;
            background-color: ${({theme}) => theme['purple-dark']};

            padding: 0.5rem;
            border-radius: 6px;

            svg {
                width: 1.23375rem;
                color: ${({theme}) => theme['white']};
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
`