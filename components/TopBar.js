import * as React from "react";
import { Appbar, Badge } from "react-native-paper";

const TopBar = ({title, navigation}) => (
  <Appbar.Header className="-mt-8" mode="center-aligned" elevated >
    <Appbar.BackAction  onPress={() => navigation()} />
    <Appbar.Content title={title} />
    <Appbar.Action icon="heart" onPress={() => {}} />
        <Appbar.Action icon="share-variant-outline" onPress={() => { }} />
     
        <Appbar.Action icon="shopping-outline" onPress={() => { }} >
            <Badge color="red">3</Badge>
    </Appbar.Action>
  </Appbar.Header>
);

export default TopBar;
