import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { FC } from 'react';

const Avatar = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-top: 40px;
    margin-left: 15px;
    margin-bottom: 10px;
`;
const LandscapeImg = styled.Image`
    width: 320px;
    height: 200px;
    margin: 10px auto;
`;
export const ScrollBox = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

const Welcome = styled.Text`
    font-size: 20px;
    margin: 0 auto;
    font-weight: bold;
`

const Paragraph = styled.Text`
    margin: 20px;
    font-size: 12px;
    line-height: 24px;
`;

const HomeTab: FC = () => {
    return (

        <ScrollBox>
            <Avatar
                source={require('../../assets/avatar.png')}
            />
            <Welcome>Welcome</Welcome>
            <LandscapeImg
                source={require('../../assets/wolf.jpg')}
            />
            <Paragraph>{'\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic a commodi accusamus. Sapiente numquam exercitationem optio doloribus laboriosam, dicta nihil et quae tempore blanditiis nisi non amet iste atque similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestias modi eos fugit. Vero voluptate labore, accusamus facere dolores quas distinctio animi sapiente tempore eligendi eum voluptas beatae doloribus aperiam?</Paragraph>
        </ScrollBox>
    );
}

export default HomeTab;