import styled from "styled-components";

export const Container = styled.div``;

export const TableTitle = styled.h3``;

export const TableContainer = styled.div`
    margin-top: 20px;
    overflow: scroll;
    height: 400px;
    scrollbar-width: none; /* Hides Scroll bar for IE and Edge */
    -ms-overflow-style: none; /* Hides Scroll bar for FireFox */
    color: #6a5d5d;

    ::-webkit-scrollbar {
        /* Hides Scroll bar for Chrome, Safari and Opera */
        display: none;
    }
`;

export const TableRow = styled.tr`
    display: flex;
    justify-content: space-between;

    :nth-last-of-type(odd) {
        background-color: #f3f2f8;
    }
`;

export const TableData = styled.td`
    padding: 8px;
`;

export const Strong = styled.strong``;