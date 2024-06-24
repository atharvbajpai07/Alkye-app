import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    'Northwell': require('./assets/fonts/Northwell.ttf'),
    'NorthwellAlt': require('./assets/fonts/NorthwellAlt.ttf'),
    'Scilla-Regular': require('./assets/fonts/Scilla-Regular.otf'),
    'Scilla-RegularItalic': require('./assets/fonts/Scilla-RegularItalic.otf'),
    'ScillaNarrow-Regular': require('./assets/fonts/ScillaNarrow-Regular.otf'),
    'ScillaNarrow-RegularItalic': require('./assets/fonts/ScillaNarrow-RegularItalic.otf'),
    'Strawford-Black': require('./assets/fonts/Strawford-Black.ttf'),
    'Strawford-Bold': require('./assets/fonts/Strawford-Bold.ttf'),
    'Strawford-ExtraLight': require('./assets/fonts/Strawford-ExtraLight.ttf'),
    'Strawford-Light': require('./assets/fonts/Strawford-Light.ttf'),
    'Strawford-Medium': require('./assets/fonts/Strawford-Medium.ttf'),
    'Strawford-Regular': require('./assets/fonts/Strawford-Regular.ttf'),
    'Strawford-Thin': require('./assets/fonts/Strawford-Thin.ttf'),
  });
};

export default useFonts;
