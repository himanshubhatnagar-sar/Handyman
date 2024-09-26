import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const AddDocument = () => {

    const [isSelected, setIsSelection] = useState(false);
    const navigation = useNavigation()
    const [chkSelected, setchkSelection] = useState(false);

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Add Document</Text>
            </View>
        </View>
        <View style={{backgroundColor:"#FFF",height:Dimensions.get("window").height}}>
            <View style={styles.bgContainer}>
                    <TextInput style={[styles.input,{marginBottom:15}]} placeholder='Document Name' />
                    <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Select Status</Text>
                    <View style={[styles.input,{paddingHorizontal:0}]}>
                        <Picker
                            style={styles.picker}
                            selectedValue={isSelected}
                            onValueChange={(itemValue) => setIsSelection(itemValue)}
                        >
                            <Picker.Item label="Active" value="" />
                            <Picker.Item label="Option 2" value="Option 2" />
                            <Picker.Item label="Option 3" value="Option 3" />
                        </Picker>
                    </View>
                    <View style={{marginTop:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={styles.namehead}>Required</Text>
                        <CheckBox
                            value={chkSelected}
                            onValueChange={setchkSelection}
                            style={styles.checkbox}
                            tintColors={{ true: '#f1b407', false: '#f1b407' }}
                        />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt}>Save</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </>
  )
}

export default AddDocument

const styles = StyleSheet.create({
    head:{
        flexDirection:"row",
        paddingHorizontal:10,
        alignItems:"center",
        paddingVertical:10,
        backgroundColor:"#f1b407",
        justifyContent:"space-between"
    },
    heading:{
        marginLeft:20,
        fontSize:20,
        color:"#000",
        fontWeight:"700"
    },
    bgContainer:{
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        marginTop:10
    },
    input:{
        backgroundColor:"#f4f7f9",
        paddingHorizontal:10,
        color:"grey",
        fontWeight:"500",
        borderRadius:10,
    },
    btn:{
        backgroundColor:"#f1b407",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:15,
        marginTop:20,
        borderRadius:10,
        marginBottom:30
    },
    btntxt:{
        fontSize:15,
        color:"#FFF",
        fontWeight:"600"
    },
})