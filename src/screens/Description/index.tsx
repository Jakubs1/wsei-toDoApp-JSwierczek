import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { FC } from 'react';


const GuitarImg = styled.Image`
width: 170px;
height: 100px;
margin: 10% 0 0 5%;
`
const RockImg = styled.Image`
width: 200px;
height: 100px;
margin-left: 40%;
`

const Lorem = styled.Text`
    margin: 20px 20px 10px 20px;
    font-size: 13px;
`;


const DescriptionTab: FC = () => {
    return (
        <View>
            <GuitarImg source={require('../../assets/guitar.jpg')}

            />
            <Lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mattis ipsum, et efficitur orci. Etiam
            consequat ornare dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nullam commodo, elit viverra iaculis convallis, massa quam viverra odio, eu facilisis orci
            sem id mi. Cras scelerisque euismod orci, non mattis arcu rutrum in. Fusce eu tortor vitae neque
            molestie dapibus id ut elit. Pellentesque tellus nisl, maximus eget purus tristique, vehicula ultrices
                nibh.</Lorem>
            <RockImg source={require('../../assets/rock.jpg')}

            />

            <Lorem>Vestibulum at feugiat mauris, nec ornare enim. Etiam nunc lectus, elementum eu justo id, ultricies
            tempor turpis. Etiam eleifend mauris sed mauris feugiat dapibus. Proin fringilla vulputate lorem, ac
            congue ipsum dictum a. Pellentesque velit arcu, faucibus eget quam et, ullamcorper sagittis est. Quisque
            ac felis iaculis, pellentesque sem et, lacinia ante. Maecenas in urna lorem. Nulla facilisi.</Lorem>
        </View>
    );
}

export default DescriptionTab;