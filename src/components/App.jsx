import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  uk: { nativeName: 'Ukrainian' },
};

export const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <div
        className="container"
        style={{
          height: '600px',
          width: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {Object.keys(lngs).map(lng => {
          <button
            style={{
              height: '200px',
              width: '500px',
              display: 'blok',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng.nativeName}
          >
            {lngs[lng].nativeName}
          </button>;
        })}

        <Trans i18nKey="description">Use React</Trans>
        {t('Learn')}
      </div>
    </div>
  );
};
