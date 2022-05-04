import { useAppDispatch, useAppSelector } from '../../../hooks';
import { axios } from '../../../lib/axios';
import { setDevices, setDevicePositions } from '../../devices/reducer';
import { loginWithEmailPassword, refreshSession } from '../api';
import {
  selectUser,
  setToken,
  setRefreshToken,
  setExpireAt,
  setUser,
  selectExpiresAt,
  selectRefreshToken,
} from '../reducer';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const refreshToken = useAppSelector(selectRefreshToken);

  const expiresAt = useAppSelector(selectExpiresAt);
  if (expiresAt && new Date(expiresAt) < new Date(Date.now() - 1000 * 60 * 5)) {
    if (refreshToken) {
      refreshSession(refreshToken)
        .then(({ session }) => {
          dispatch(setToken(session.token));
          dispatch(setExpireAt(session.expiresAt));
          dispatch(setUser(session.user));
          dispatch(setRefreshToken(session.refreshToken));
        })
        .catch(() => {
          clearAuthState();
        });
    }
  }

  const clearAuthState = () => {
    dispatch(setToken(null));
    dispatch(setRefreshToken(null));
    dispatch(setExpireAt(null));
    dispatch(setUser(null));

    dispatch(setDevices([]));
    dispatch(setDevicePositions([]));
  };

  const logout = async () => {
    await axios.post('/auth/session/remove').catch(() => {});

    clearAuthState();

    window.location.assign(window.location.origin);
  };

  const login = async (email: string, password: string) => {
    var loginSuccess = false;
    await loginWithEmailPassword({
      email,
      password,
    }).then((data) => {
      const session = data.session;
      dispatch(setToken(session.token));
      dispatch(setRefreshToken(session.refreshToken));
      dispatch(setExpireAt(session.expiresAt));
      dispatch(setUser(session.user));
      loginSuccess = true;
    });

    return loginSuccess;
  };

  const signOutEverywhere = async () => {
    await axios.post('/auth/session/invalidate').catch(() => {});

    clearAuthState();

    window.location.assign(window.location.origin);
  };

  return {
    user,
    login,
    logout,
    signOutEverywhere,
  };
};
