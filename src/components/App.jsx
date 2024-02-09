import i18next from 'i18next';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Ukrainian' },
};

export const App = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        {Object.keys(lngs).map(lng => {
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng.nativeName}
          >
            {lngs[lng]}
          </button>;
        })}
      </div>
      <Trans i18nKey="description">Use React</Trans>
      {t('Learn')}
    </div>
  );
};
