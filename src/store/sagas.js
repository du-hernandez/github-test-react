import { fork, all } from 'redux-saga/effects';

import gistsSaga from '../services/getGists/saga';

export default function* rootSaga() {
    yield all([
        fork(gistsSaga)
    ]);
};