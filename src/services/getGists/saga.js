import { takeLatest, all, put } from 'redux-saga/effects';
import { fetchGeneric } from '../../common';
import * as types from './types';

/**
 * GET_GISTS
 */

const getGists = async (page, itemByPage) => (
  await fetchGeneric('GET', `gists/public?page=${page}&per_page=${itemByPage}`)
    .then(res => res)
    .catch(err => console.error(err))
);

function* fetchGists(action) {
  const { page, itemByPage } = action.payload;
  const response = yield getGists(page, itemByPage);
  if (!response.message) {
    yield put({ type: types.GET_GISTS_SUCCESS, payload: { page, gists: response } });
  } else {
    yield put({ type: types.GET_GISTS_FAIL, payload: { error: `Error:\n${response.message}` } });
  }
}


/**
 * GET_ONE_GIST
 */

const getGist = async (idGist) => (
  await fetchGeneric('GET', `gists/${idGist}`)
    .then(res => res)
    .catch(err => err)
);

function* fetchGist(action) {
  const { id } = action.payload;
  const response = yield getGist(id);

  if (!response.message) {
    yield put({ type: types.GET_ONE_GIST_SUCCESS, payload: { gist: response } });
  } else {
    // yield put({ type: types.GET_ONE_GIST_FAIL, payload: { error: `Error:\nThe Gist with the specified id was not found` } });
  }
}

function* actionWatcher() {
  yield takeLatest(types.GET_GISTS, fetchGists);
  yield takeLatest(types.GET_ONE_GIST, fetchGist);
}

export default function* GistsSaga() {
  yield all([actionWatcher()]);
}
