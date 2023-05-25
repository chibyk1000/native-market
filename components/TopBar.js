import * as React from "react";
import { Appbar, Badge } from "react-native-paper";

const TopBar = ({title}) => (
  <Appbar.Header>
    <Appbar.BackAction  onPress={() => {}} />
    <Appbar.Content title={title} />
    <Appbar.Action icon="heart" onPress={() => {}} />
        <Appbar.Action icon="share-variant-outline" onPress={() => { }} />
     
        <Appbar.Action icon="shopping-outline" onPress={() => { }} >
            <Badge color="red">3</Badge>
    </Appbar.Action>
  </Appbar.Header>
);

export default TopBar;
