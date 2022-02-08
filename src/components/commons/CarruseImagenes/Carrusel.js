import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {ITEM_WIDTH, SLIDER_WIDTH} from './CarouselCardItem';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

const CarouselCards = ({data, setCant}) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={{width: responsiveWidth(100), backgroundColor: '#fff'}}>
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data.length === 0 ? [{}] : data}
        autoplay={false}
        loop={false}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={i => {
          setIndex(i);
          setCant(i);
        }}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
