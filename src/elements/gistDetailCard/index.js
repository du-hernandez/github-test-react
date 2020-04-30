import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 8px;
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

const GistDetailCard = ({ gist }) => {
    const { owner, description, created_at, id } = gist;
    const { login: name, avatar_url: image } = owner;
    return (
        <Container>
            <Image
                src={image}
                alt={name}
                height={200}
                width={200}
            />
            <a href={`https://github.com/${name}`}>See on GitHub</a>
            <Footer>
                <Title>{name}</Title>
                <Paragraph>{description || 'Without description'}</Paragraph>
                <Paragraph>{created_at}</Paragraph>
            </Footer>
            <Link to='/'>Go back</Link>
        </Container>
    );
};

export default GistDetailCard;
