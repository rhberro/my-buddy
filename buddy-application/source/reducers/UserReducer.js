export default function UserReducer (
  state = {
    authenticated: false,
    loading: false,
  },
  { type }
) {
  if (type === 'SIGNIN') {
    return { ...state, loading: true }
  }
  if (type === 'SIGNIN_SUCCEED') {
    return { ...state, authenticated: true, loading: false }
  }
  if (type === 'SIGNIN_FAILED') {
    return { ...state, authenticated: false, loading: false }
  }
  return state
}
