import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGists } from '../../../../services/getGists/actions';
import FeedView from "./view";

// const Button = styled.a`
//     color: white;
//     font-weight: bold,
//     margin-top: 10px;
//     margin-bottom: 10px;
//     margin-right: 10px;
//     margin-left: 10px;
//     border: 1px solid #00bcd4;
//     background-color: #00bcd4;
//     border-radius: 5px;
// `;

const Container = styled.div`
    display: flex;
    justify-content: 'center';
    align-items: 'center';
`;


const Feed = ({ gists, getGists }) => {
    
    return (
        <Container>
            <FeedView
                gists={gists}
            />
        </Container>
    )
}

const mapStateToProps = state => ({
    gists: state.gists
});

const mapDispatchToProps = {
    getGists
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
