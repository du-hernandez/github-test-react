import * as types from './types';

const defaultParams = {
    page: 0,
    itemByPage: 15
}

export const getGists = (params = defaultParams) => {
    return {
        type: types.GET_GISTS,
        payload: params
    }
};

export const getOneGist = (idGist) => ({
    type: types.GET_ONE_GIST,
    payload: { idGist }
});

export const hideError = () => ({
    type: types.HIDE_ERROR
});