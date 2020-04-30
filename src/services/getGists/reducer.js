import * as types from './types';

const initialState = {
    loading: false,
    pageActive: 0,
    gistSelected: null,

    /**
     * Gists schema --> gists: [{ page: number, gists: array }]
     */
    gists: [],

    /**
     * Error schema --> error: { message: string, details: string }
     */
    error: null

};

const gistsReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.GET_GISTS:
            return { ...state, loading: true };

        case types.GET_GISTS_SUCCESS:
            /**
             * Check if the requested data already exists
             */

            let found = state.gists.filter(gist => gist.page === payload.page);

            if (found.length > 0) {
                let newGists = state.gists.map(gist => {
                    if (gist.page === payload.page) return payload;
                    return gist;
                });
                state.gists = newGists;

                return {
                    ...state,
                    pageActive: payload.page,
                    loading: false
                }
            }

            if (found.length === 0)
                return {
                    ...state,
                    gists: [
                        ...state.gists,
                        {
                            page: payload.page,
                            gists: payload.gists
                        }],
                    loading: false,
                    pageActive: payload.page
                };

            return state;

        case types.GET_GISTS_FAIL:
            return {
                ...state,
                error: action.payload.error,
                loading: false
            };



        case types.GET_ONE_GIST:
            return { ...state, loading: true };

        case types.GET_ONE_GIST_SUCCESS:
            return {
                ...state,
                gistSelected: payload.gist,
                loading: false
            };

        case types.GET_ONE_GIST_FAIL:
            return {
                ...state,
                error: payload.error,
                loading: false
            };

        case types.HIDE_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export default gistsReducer;