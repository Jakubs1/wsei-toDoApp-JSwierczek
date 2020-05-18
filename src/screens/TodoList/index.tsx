import * as React from 'react';
import styled from 'styled-components/native';
import { FC, useState } from 'react';
import Layout from "../../constans/Layout";
import { Text, View, Image, ScrollView } from 'react-native';

import Form from '../../components/Form';
import TodoList from '../../components/TodoList';

const ListTab = ({ navigation }) => {
    const [formView, setFormView] = useState<boolean>(false);
    return (
        <View>
            {formView ? (
                <Form switchView={setFormView} />
            ) : (
                    <TodoList switchView={setFormView} />
                )}
        </View>
    );
}


export default ListTab;