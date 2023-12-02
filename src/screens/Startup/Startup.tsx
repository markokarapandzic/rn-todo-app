import React, { useEffect } from 'react';
import { ActivityIndicator, View, useColorScheme } from 'react-native';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { reduxStorage } from '../../store';
import { useThemeLocal } from '@/hooks/useThemeLocal';
import { storageKeys } from '@/constants/storageKeys';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const systemTheme = useColorScheme();
  const { setTheme } = useThemeLocal();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    handleThemePreference();

    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  async function handleThemePreference() {
    const savedTheme = await reduxStorage.getItem(storageKeys.THEME);

    if (!savedTheme) {
      const theme = systemTheme === 'dark' ? 'dark' : 'light';
      setTheme(theme);
    } else {
      setTheme(savedTheme);
    }
  }

  return (
    <View>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Startup;
