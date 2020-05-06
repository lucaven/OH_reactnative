import React from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles from './SplashScreenStyle'
import dummyUsers from './dummy'
import { ApplicationStyles, Helpers, Images } from 'App/Theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const { width, height } = Dimensions.get("window")

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userIndex: 0,
      activeDotIndex: 0,
      carouselItems: [
        {
          title: "Find tutors or students who have taken your exact class 1"
        },
        {
          title: "Find tutors or students who have taken your exact class 2"
        },
        {
          title: "Find tutors or students who have taken your exact class 3"
        },
        {
          title: "Find tutors or students who have taken your exact class 4"
        },

      ]
    }
  }
  _renderCarousel({ item, index }) {
    return (
      <View style={styles.carouselView}>
        <Image style={styles.logo} source={Images.search} resizeMode={'contain'} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    )
  }
  get pagination() {
    const { activeDotIndex, carouselItems } = this.state
    return (
      <Pagination
        dotsLength={carouselItems.length}
        containerStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
        activeDotIndex={activeDotIndex}
        dotStyle={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 0, backgroundColor: Colors.white }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
      />
    )
  }
  renderItems = ({ item, index }) => {
    let { userIndex } = this.state
    let isSelected = userIndex === index
    return (
      <TouchableOpacity
        activityOpacity={0.8}
        style={styles.userBoard}
        onPress={() => {
          this.setState({
            userIndex: index
          })
        }}
      >
        <View style={[styles.userBoard1, !isSelected && { opacity: 0.5 }]}>
          <Image style={styles.userIcon} source={item.image} resizeMode={'contain'} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.username}>{item.firstName} {item.lastName}</Text>
            <View style={styles.userInfoView}>
              <View style={{ width: 80 }}>
                <Text style={styles.labelTitle}>Rate/Hr</Text>
                <Text style={styles.userInfoText}>{item.rate}</Text>
              </View>
              <View>
                <Text style={styles.labelTitle}>Sessions</Text>
                <Text style={styles.userInfoText}>{item.sessions}</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.chatView}>
          <Text style={styles.chatText}>Chat</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
          <View>
            <View style={{ height: height - 420 }}>
              <View style={styles.logoView}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={width}
                  itemWidth={width}
                  renderItem={this._renderCarousel}
                  onSnapToItem={(index) => this.setState({ activeDotIndex: index })}
                />
                {this.pagination}
              </View>
            </View>
            <FlatList
              data={dummyUsers}
              renderItem={this.renderItems}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.signup}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightView}>
            <Text>rightView</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
