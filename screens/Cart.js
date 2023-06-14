import * as React from "react";
import { DataTable } from "react-native-paper";
import Button from "../components/Button";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
const optionsPerPage = [2, 3, 4];
// Bizmarrow500
const MyComponent = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
const cart = useSelector((state) => state.cartReducer);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

console.log('cart: ',cart.item)
  return (
    <DataTable className="bg-white shadow-md mt-5">
      <DataTable.Header className="bg-slate-950">
        <DataTable.Title textStyle={{ fontSize: 20, color: "white" }}>Item</DataTable.Title>a 
        
        <DataTable.Title numeric textStyle={{fontSize: 20, color:"white"}}>Quantity</DataTable.Title>
        <DataTable.Title numeric textStyle={{fontSize: 20, color:"white"}}>Price</DataTable.Title>
        <DataTable.Title numeric textStyle={{fontSize: 20, color:"white"}}>Action</DataTable.Title>
      </DataTable.Header>
      {
        Object.keys(cart).length > 0 ? (
          <>
            {
              cart.item.map((p) => {
               
                return (
                  <DataTable.Row key={p._id}>
                    <DataTable.Cell>{p.title}</DataTable.Cell>
                    <DataTable.Cell numeric>
                      {" "}
                      <View className="flex-row items-center">
                        <Button
                          classes="bg-secondary rounded p-1"
                          // onPress={() => minusCount(item)}
                        >
                          <Entypo name="minus" size={22} color="black" />
                        </Button>
                        <Text className="text-xl p-1">{p.quantity}</Text>
                        <Button
                          classes="bg-secondary rounded p-1"
                          // onPress={() =>
                          //   addCount({ ...item, productId: item._id })
                          // }
                        >
                          <Entypo name="plus" size={22} color="black" />
                        </Button>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>{p.price}</DataTable.Cell>
                    <DataTable.Cell className="justify-end">
                      <Button classes="">
                        <MaterialIcons name="delete" size={24} color="maroon" />
                      </Button>
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })
          }
          </>
        ): ""
}
      

   

      <DataTable.Pagination
        page={page}
        numberOfPages={Object.keys(cart).length > 0 ? cart.item.length : 0}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={"Rows per page"}
      />
    </DataTable>
  );
};

export default MyComponent;
