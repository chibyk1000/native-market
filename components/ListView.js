/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React, { Component } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";

import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

/***
 * To test out just copy this component and render in you root component
 */
class ListView extends React.Component {
  constructor(args) {
    super(args);

    let { width } = Dimensions.get("window");

    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    this._layoutProvider = new LayoutProvider(
      (index) => {
        return ViewTypes.FULL;
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.FULL:
            dim.width = width / 2;
            dim.height = 330;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      }
    );


    this._rowRenderer = this._rowRenderer.bind(this);

    //Since component should always render once data has changed, make data provider part of the state
    this.state = {
      dataProvider: dataProvider.cloneWithRows(this._generateArray(20)),
    };
  }


  _generateArray(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = i;
    }
    return arr;
  }

  //Given type and data return the view component
  _rowRenderer(type, data) {
    //You can return any view here, CellContainer has no special significance
    return (
      <TouchableOpacity
        className="bg-white shadow-lg h-80 my-2 w-[95%] mx-auto rounded-xl p-1 justify-around"
        onPress={() => this.props.handleNavigate('SingleProduct')}
      >
        <View className="w-full h-[60%]">
          <Image
            source={require("../assets/2.jpg")}
            className="h-full w-full"
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
        <View>
          <Text className="font-bold text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="bg-secondary  font-bold  rounded-xl p-2 text-white">
            4.9
          </Text>
          <Text className="text-primary font-bold text-xl">$20.00</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <RecyclerListView
        canChangeSize
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
      />
    );
  }
}

export default ListView;
