import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const CarouselCards = props => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={{width: responsiveWidth(100), backgroundColor: '#fff'}}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.data}
        autoplay={false}
        loop={false}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => {
          setIndex(index);
          props.setCant(index);
        }}
        useScrollView={true}
      />
      <View style={styles.pag}>
        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 10,
            marginHorizontal: 0,
            backgroundColor: '#fff',
          }}
          inactiveDotStyle={{
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: 'transparent',
          }}
          inactiveDotOpacity={0.3}
          inactiveDotScale={0.9}
          tappableDots={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pag: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    width: responsiveWidth(100),
    bottom: '10%',
  },
});

export default CarouselCards;
