import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { FC } from 'react';

const DescriptionTab: FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>There will be description</Text>
        </View>
    );
}

export default DescriptionTab;