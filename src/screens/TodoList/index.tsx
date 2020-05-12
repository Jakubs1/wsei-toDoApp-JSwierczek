import * as React from 'react';
import styled from 'styled-components/native';
import { FC, useState } from 'react';
import Layout from "../../constans/Layout";
import { Text, View, Image, ScrollView } from 'react-native';



const ListTab: FC = () => {
    const [formView, setFormView] = useState<boolean>(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>There will be TodoList</Text>
        </View>
    );
}


export default ListTab;