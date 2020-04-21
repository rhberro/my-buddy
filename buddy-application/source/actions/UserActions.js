function signinAction () {
  return { type: 'SIGNIN' }
}

function signinActionSucceed () {
  return { type: 'SIGNIN_SUCCEED' }
}

function signinActionFailed () {
  return { type: 'SIGNIN_FAILED' }
}

export function signin () {
  return function (dispatch) {
    dispatch(signinAction())
    dispatch(signinActionSucceed())
    dispatch(signinActionFailed())
  }
}
