import React from 'react';
import styled from 'styled-components';
import { GistCard } from '../../../../elements';
import SearchForm from './components/searchForm';

const Container = styled.div`
`;

const FormContainer = styled(Container)`
    display:flex;
    align-items:'center'
`;

const FeedView = ({ gists }) => {
    const { error, loading, pageActive, gists: data } = gists;

    let gistActive = [];
    if (data.length !== 0) {
        gistActive = data.filter(item => item.page === pageActive)
    }
    return (
        <React.Fragment>
            <Container className='container-fluid'>
                <FormContainer className='row'>
                    <SearchForm />
                </FormContainer>
                <Container className='row'>
                    {
                        gistActive.length !== 0 && (
                            gistActive[0].gists.map((gist, index) => (
                                <GistCard
                                    gist={gist}
                                    key={index}
                                />
                            ))
                        )
                    }
                </Container>
            </Container>
        </React.Fragment>
    );
}



export default FeedView;
