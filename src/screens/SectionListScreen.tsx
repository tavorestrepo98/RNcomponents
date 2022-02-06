/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SectionList, Text, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';

import {styles} from '../theme/appTheme';
import {casas} from '../data/section-list';

export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={'Total: ' + section.data.length} />
          </View>
        )}
        stickySectionHeadersEnabled
        ListHeaderComponent={() => <HeaderTitle title="SectionList" />}
        ListFooterComponent={() => <HeaderTitle title="Footer SectionList" />}
        ItemSeparatorComponent={ItemSeparator}
        SectionSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
