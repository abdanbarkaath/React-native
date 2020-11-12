import React, { useState, useEffect } from 'react';
import { Button, Modal, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, SectionList } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Cards from '../shared/Cards';
import Modals from '../shared/Modals';
import Forms from '../shared/Forms';
import { GlobalStyles } from '../styles/global'
import ReviewForms from '../shared/ReviewForms';
import ValidationComponent from 'react-native-form-validator';
import { connect, Provider } from 'react-redux'
import store from '../redux/store'
import { AddUserReview } from '../redux/actions/index'
import { addReviewReducer } from '../redux/reducers/reviews';


function Home({ navigation, reviews, AddUserReview }) {

  // const [reviews, setReviews] = useState([
  //   { title: 'first review', rating: '1', body: 'some review text', id: 1 },
  //   { title: 'second review', rating: '3', body: 'some review text', id: 2 },
  //   { title: 'third review', rating: '5', body: 'some review text', id: 3 },
  // ])

  const [modalOpen, setModalOpen] = useState(false);

  function navigateToID(review) {
    navigation.navigate('ReviewDetails', review)
  }

  const addReview = (review) => {
    // review.id = reviews.length + 1;
    // console.log(review.id);
    // setReviews((prev) => [review, ...prev]);
    // store.dispatch(AddUserReview(review))
    AddUserReview(review)
    setModalOpen(false);
  }

  // useEffect(() => {
  // const review = { title: 'forth review', rating: '4', body: 'some  text', id: 4 }
  // console.log(store.getState().reviews.reviews);
  // store.dispatch(AddUserReview(review));
  // console.log();
  // console.log(store.dispatch((review) => dispatch(addReviewReducer(review))));
  // }, [])

  return (
    <Provider store={store}>
      <View style={GlobalStyles.container}>
        <Modals modalVisible={modalOpen} setModalOpen={setModalOpen}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ReviewForms addReview={addReview}></ReviewForms>
          </TouchableWithoutFeedback>
        </Modals>
        <FlatList
          style={styles.listContainer}
          keyExtractor={(review) => review.id.toString()}
          data={reviews}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => navigateToID(item)}>
              <View>
                <Cards>
                  <Text style={GlobalStyles.titleText}>{item.title}</Text>
                </Cards>
              </View>
            </TouchableOpacity>
          }
        ></FlatList>
        {/* <SectionList
          sections={[{
            title: 'some title', data: reviews
          }]}
          keyExtractor={(section) => section.id}
          renderItem={({ section }) => <Item title={section.title} />}
          renderSectionHeader={({ title }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
        <View>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 10,
    // backgroundColor: 'red',
  }
});


const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AddUserReview: (review) => dispatch(AddUserReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
