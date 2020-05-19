import React, { FC, useState, FormHTMLAttributes } from 'react';
import { Text, Button, Image, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';

import { ISingleElementList } from '../entities/todoSingleEl';
import { removeNewElemTodoList } from '../actions/todoListActions';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Wrapper = styled.ScrollView`
    margin: 45px 30px 0 30px;
    background-color: orange;
    height: 94%;
`;

const SingleElList = styled.View`
    border: 2px solid black;
    margin: 0 0 19px 0;
`;

const BinButton = styled.View`
    margin-left: 92%;
    position: absolute;
`;

const HeaderText = styled.Text`
    padding: 5px;
    font-weight: bold;
`;

const HeaderBox = styled.View`
    background-color: gold;
    border-bottom-width: 1px;
    position: relative;
`;

const DescriptionBox = styled.ScrollView`
    height: 70px;
    background-color: khaki; 
`;

const DescriptionText = styled.Text`
    margin: 7px;
`;

const PlusButton = styled.Image`
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 20px;
    right: 43%;
`;

const WrapperElements = styled.View`
    margin-bottom: 60px;
    background-color: orange;
`;


type removeElemTodoList = ReturnType<typeof removeNewElemTodoList>;

const TodoList: FC<{ switchView(formView: boolean) }> = props => {
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList);
    const dispatch = useDispatch();
    const removeData = (id: number) => { dispatch<removeElemTodoList>(removeNewElemTodoList(id)) };
    const goToForm = () => {
        props.switchView(true);
    }
    return (
        <Wrapper showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <WrapperElements>
                {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                    <SingleElList key={index}>
                        <HeaderBox>
                            <HeaderText>{elem.name}</HeaderText>
                            <TouchableWithoutFeedback onPress={() => removeData(elem.id)}>
                                <BinButton>
                                    <MaterialCommunityIcons name="trash-can" color="black" size={25} />
                                </BinButton>
                            </TouchableWithoutFeedback>
                        </HeaderBox>
                        <DescriptionBox nestedScrollEnabled={true}>
                            <DescriptionText>{elem.description}</DescriptionText>
                        </DescriptionBox>
                    </SingleElList>

                )}
            </WrapperElements>
            <TouchableWithoutFeedback onPress={goToForm}>
                <PlusButton source={require('../assets/addButton.png')} />
            </TouchableWithoutFeedback>
        </Wrapper>
    )
}

export default TodoList;