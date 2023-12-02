import { ThemeMode, useThemeMode } from '@rneui/themed';
import { reduxStorage } from '@/store';
import { storageKeys } from '@/constants/storageKeys';

export function useThemeLocal() {
  const { setMode } = useThemeMode();

  function setTheme(theme: ThemeMode) {
    setMode(theme);
    reduxStorage.setItem(storageKeys.THEME, theme);
  }

  return {
    setTheme,
  };
}
