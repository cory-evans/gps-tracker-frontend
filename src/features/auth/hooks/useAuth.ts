import { useAppDispatch, useAppSelector } from '../../../hooks';
import { axios } from '../../../lib/axios';
import { setDevices } from '../../devices/reducer';
import { loginWithEmailPassword } from '../api/login';
import { selectUser, setToken, setRefreshToken, setExpireAtUTC, setUser } from '../reducer';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const clearAuthState = () => {
    dispatch(setToken(null));
    dispatch(setRefreshToken(null));
    dispatch(setExpireAtUTC(null));
    dispatch(setUser(null));

    dispatch(setDevices([]));
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
      dispatch(setExpireAtUTC(session.expiresAtUTC));
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
