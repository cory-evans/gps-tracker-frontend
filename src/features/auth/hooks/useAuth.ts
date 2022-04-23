import { useAppDispatch, useAppSelector } from '../../../hooks';
import { axios } from '../../../lib/axios';
import { setDevices } from '../../devices/reducer';
import { loginWithEmailPassword } from '../api/login';
import { selectUser, setToken, setRefreshToken, setExpireAtUTC, setUser } from '../reducer';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const logout = async () => {
    await axios.post('/auth/signout').catch(() => {});

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
      dispatch(setToken(data.token));
      dispatch(setRefreshToken(data.refreshToken));
      dispatch(setExpireAtUTC(data.expiresAtUTC));
      dispatch(setUser(data.user));
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
