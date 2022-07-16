import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/storeReducer";
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
    const { user, products } = useStore();
    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    function changeLaguage(language) {
    i18n.changeLanguage(language);
    }

    return (
        <div>
            <h1>{t("logtitle")}</h1>
            <h2>User: {user?.name}</h2>
            <button onClick={() => dispatch({ type: types.authLogout })}>
            {t("logout")}
            </button>
            <button onClick={() => dispatch({
                type: types.authLogin,
                payload: { id: 1, name: 'Luz Elena' }
            })}>
                {t("login")}
            </button>

        </div>
    )
}

export default MyComponent