import { apiGetVotes } from 'apis';
import { call, put } from 'redux-saga/effects';
import { AppActions } from 'store';

interface IResponse {
  data: unknown,
  meta: unknown,
  links: unknown,
}

export function* getVotesSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetVotes(action.payload)
    );

    if (result) {
      yield put(AppActions.proposal.getVotesSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.proposal.getVotesFailure(error));
  }
}