import React from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function CarouselComponent() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [carouselItems, setcarouselItems] = React.useState([
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ]);

  const renderList = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'grey',
          borderRadius: 5,
          padding: 50,
          height: 500,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    // <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'blue' }}>
    <>
      <Carousel
        layout={'default'}
        activeSlideAlignment={'center'}
        // ref={(ref) => (this.carousel = ref)}
        data={carouselItems}
        sliderWidth={500}
        itemWidth={500}
        activeDotIndex={activeIndex}
        renderItem={renderList}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </>
    // </View>
  );
}
