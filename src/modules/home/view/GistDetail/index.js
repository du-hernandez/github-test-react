import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GistDetailCard } from '../../../../elements';
import { getOneGist, hideError } from '../../../../services/getGists/actions';


const Spinners = styled.div`
    position:absolute;
    top:20px;
    left:50%;
`;

const GistDetail = ({ getOneGist, gist, loading }) => {
    const { id } = useParams();
    useEffect(() => {
        getOneGist(id || '74a5b086db0c5af484be6cf854556a8a');
    }, []);

    

    if (!gist)
        return (
            <Spinners>
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </Spinners>
        );

    return (
        <GistDetailCard
            gist={gist}
        />
    );
};

const mapStateToProps = state => ({
    gist: state.gists.gistSelected,
    loading: state.gists.loading,
    error: state.gists.error
})

const mapDispatchToProps = {
    getOneGist,
    hideError
}

export default connect(mapStateToProps, mapDispatchToProps)(GistDetail);