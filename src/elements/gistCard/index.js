import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 8px;
    width:300px;
`;

const Image = styled.img`
    margin-bottom: 10px;
`;

const Footer = styled.div`
`;

const Title = styled.h5`
    text-align:center;
`;

const Paragraph = styled.p`

    text-align: center;
`;

const GistCard = ({ gist }) => {
    const { owner, description, created_at, id } = gist;
    const { login: name, avatar_url: image } = owner;
    return (
        <Link to={`/gits-detail/${id}`}>
            <Container>
                <Image
                    src={image}
                    alt={name}
                    height={100}
                    width={100}
                />
                <Footer>
                    <Title>{name}</Title>
                    <Paragraph>{description || 'Without description'}</Paragraph>
                    <Paragraph>{created_at}</Paragraph>
                </Footer>
            </Container>
        </Link>
    );
}

export default GistCard;