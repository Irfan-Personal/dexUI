import { apiGetProposals, apiGetCertainProposal } from 'apis';
import { call, put } from 'redux-saga/effects';
import { AppActions } from 'store';

interface IResponse {
  data: unknown,
  meta: unknown,
  links: unknown,
}

export function* getProposalsSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetProposals(action.payload)
    );

    if (result) {
      yield put(AppActions.proposal.getProposalsSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.proposal.getProposalsFailure(error));
  }
}

export function* getCertainProposalSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetCertainProposal(action.payload)
    );

    if (result) {
      yield put(AppActions.proposal.getCertainProposalSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.proposal.getCertainProposalFailure(error));
  }
}