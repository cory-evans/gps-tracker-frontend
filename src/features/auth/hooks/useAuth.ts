import { useAppDispatch, useAppSelector } from '../../../hooks';
import { axios } from '../../../lib/axios';
import { setDevices } from '../../devices/reducer';
import { loginWithEmailPassword } from '../api/login';
import { selectUser, setToken, setRefreshToken, setExpireAtUTC, setUser } from '../reducer';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const logout = async () => {
    await axios.post('/auth/session/remove').catch(() => {});

    dispatch(setToken(null));
    dispatch(setRefreshToken(null));
    dispatch(setExpireAtUTC(null));
    dispatch(setUser(null));

    dispatch(setDevices([]));

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

  return {
    user,
    login,
    logout,
  };
};
