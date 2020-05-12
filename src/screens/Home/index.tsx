import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { FC } from 'react';

const Avatar = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-top: 30px;
    margin-left: 15px;
`;
const LandscapeImg = styled.Image`
    width: 100%;
    height: 40%;
`;
export const ScrollBox = styled.ScrollView`
    flex: 1;
    width: 100%;
`;
const Paragraph = styled.Text`
    margin: 20px;
    font-size: 18px;
    line-height: 28px;
`;

const HomeTab: FC = () => {
    return (

        <ScrollBox>
            <Avatar
                source={require('../../assets/avatar.png')}
            />
            <Text>There will be Home Page</Text>
            <LandscapeImg
                source={require('../../assets/wolf.jpg')}
            />
            <Paragraph>{'\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        </ScrollBox>
    );
}

export default HomeTab;