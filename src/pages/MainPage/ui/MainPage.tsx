import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation()

  return <div>{t('Главая страница')}</div>;
};

export default MainPage;
