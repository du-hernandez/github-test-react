import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { GistDetailCard } from '../../../../elements';
import { useSelector, useDispatch } from "react-redux";
import * as ActionTypes from '../../../../services/getGists/types';


const Spinners = styled.div`
    position:absolute;
    top:20px;
    left:50%;
`;

const GistDetail = () => {
    const gist = useSelector(state => state.gists.gistSelected);
    const { id } = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ActionTypes.GET_ONE_GIST,
            payload: { id: id || '74a5b086db0c5af484be6cf854556a8a' }
        });
    }, [id])

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

export default GistDetail;