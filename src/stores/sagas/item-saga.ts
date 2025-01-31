import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchItemsApi } from '../../services';
import { fetchItemsFailure, fetchItemsSuccess } from '../slice/item-slice';
import type { FetchItemsStartAction } from '../types/sagas';

function* fetchItems(
  action: FetchItemsStartAction,
): Generator<unknown, void, string[]> {
  try {
    console.log({ action });
    const items = yield call(fetchItemsApi);
    yield put(fetchItemsSuccess(items));
  } catch (error: unknown) {
    yield put(fetchItemsFailure('error'));
  }
}

export function* watchFetchItems(): Generator<unknown, void, unknown> {
  yield takeLatest<FetchItemsStartAction>('items/fetchItemsStart', fetchItems);
}
