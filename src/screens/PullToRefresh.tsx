import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setrefreshing] = useState(false);

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setrefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
      </View>
    </ScrollView>
  );
};
