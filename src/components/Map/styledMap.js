import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    background: #fff;
    padding: 1rem;
    border-radius: 20px;
    margin: 16px 0;
    box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

    .leaflet-container {
        height: 100%;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoFlag = styled.div`
    height: 80px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin-bottom: 10px;

    img {
        width: 100px;
        border-radius: 5px;
    }
`;

export const InfoName = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #555;
`;

export const InfoData = styled.div`
    font-size: 16px;
    margin-top: 5px;
`;