import lang from 'i18n-js';
import { times } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { pure } from 'recompact';
import { colors, position } from '../../styles';
import AddFundsInterstitial from '../AddFundsInterstitial';
import { FabWrapper } from '../fab';
import { Centered, Column } from '../layout';
import AssetListHeader from './AssetListHeader';
import AssetListItemSkeleton from './AssetListItemSkeleton';

const InterstitialOffset = AssetListHeader.height + FabWrapper.bottomPosition;

const renderSkeleton = index => (
  <AssetListItemSkeleton
    index={index}
    key={`skeleton${index}`}
  />
);

const AssetListSkeleton = () => (
  <Column style={position.sizeAsObject('100%')}>
    <AssetListHeader title={lang.t('account.tab_balances_empty_state')} />
    <Centered flex={1}>
      <Column style={position.coverAsObject}>
        {times(5, renderSkeleton)}
      </Column>
      {(
        <AddFundsInterstitial offsetY={-InterstitialOffset} />
      )}
    </Centered>
  </Column>
);

export default pure(AssetListSkeleton);
