import React from 'react';
import { useSelector, } from 'react-redux';
import styled from 'styled-components';
import FeedView from "./view";

const Container = styled.div`
    display: flex;
    justify-content: 'center';
    align-items: 'center';
`;

const Feed = () => {
    const gists = useSelector(state => state.gists);
    return (
        <Container>
            <FeedView
                gists={gists}
            />
        </Container>
    );
}

export default Feed;
