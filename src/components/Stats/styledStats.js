import styled from "styled-components";

export const Container = styled.div`
    .infoBox {
        flex: 1;

        :not(:last-child) {
            margin-right: 15px;
        }
    }

    .infoBox__total {
        color: #6c757d;
        font-weight: 700 !important;
        font-size: 0.8rem !important;
        margin-top: 15px !important;
    }

    .infoBox--selected {
        border-top: 10px solid greenyellow;
    }
    
    .infoBox--red {
        border-color: #cc1034;
    }

`;

export const Cases = styled.h2`
        color: #cc1034;
        font-weight: 600;
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
`;