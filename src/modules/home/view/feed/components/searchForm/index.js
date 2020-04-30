import React, { useState } from 'react';
import styled from 'styled-components';
import { getGists } from '../../../../../../services/getGists/actions';
import { connect } from 'react-redux';

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


const SearchForm = ({ getGists, loading }) => {
    const [page, setPage] = useState(0)
    const [itemByPage, setItemByPage] = useState(0);

    const changeInputHandler = event => {
        setItemByPage(event.target.value)
    }

    const submitHandler = () => {
        getGists({
            page: page && page >= 0 ? page : 0,
            itemByPage: itemByPage && itemByPage >= 0 ? itemByPage : 15
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

const mapStateToProps = state => ({
    loading: state.gists.loading
})

const mapDispatchToProps = {
    getGists
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);