import React, { useState } from 'react';
import styled from 'styled-components';
import * as ActionTypes from '../../../../../../services/getGists/types';
import { useSelector, useDispatch } from 'react-redux';

const Input = styled.input`
    margin-left:5px;
`;

const Form = styled.form`
    margin-left:50px
`;

const Button = styled.a`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    border: 1px solid #00bcd4;
    border-radius: 5px;
`;

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:600px;
`;

const Spinners = styled.div`
    position:absolute;
    left:0;
    margin-left:10px;
`;


const SearchForm = () => {
    const [page, setPage] = useState(0)
    const [itemByPage, setItemByPage] = useState(0);

    const loading = useSelector(state => state.gists.loading);
    const dispatch = useDispatch();

    const changeInputHandler = event => {
        setItemByPage(event.target.value)
    }

    const submitHandler = () => {
        dispatch({
            type: ActionTypes.GET_GISTS,
            payload: {
                page: page && page >= 0 ? page : 0,
                itemByPage: itemByPage && itemByPage >= 0 ? itemByPage : 15
            }
        });
    }

    return (
        <Form>
            <div>
                <Container>
                    <Input
                        className='form-control'
                        placeholder='Page'
                        value={`Page: ${page}`}
                        name='page'
                        disabled
                    />
                    <Input
                        className='form-control'
                        placeholder='Gist by page'
                        type='number'
                        onChange={changeInputHandler}
                        value={itemByPage}
                        name='numItemsByPage'
                    />
                    <Button className='btn btn-primary text-white' onClick={submitHandler}>
                        Search
                    </Button>
                    <Button
                        className='btn btn-success text-white'
                        onClick={() => page >= 1 ? setPage(page - 1) : {}}
                    >
                        Anterior
                    </Button>
                    <Button
                        className='btn btn-success text-white'
                        onClick={() => (page > 29) ? {} : setPage(page + 1)}
                    >
                        Siguiente
                    </Button>
                    {
                        loading && (
                            <Spinners>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </Spinners>
                        )
                    }
                </Container>
            </div>
        </Form>
    );
}

export default SearchForm;
