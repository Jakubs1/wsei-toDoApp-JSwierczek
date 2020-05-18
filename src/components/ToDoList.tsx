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
    margin: 80px 30px 0 30px;
`;

const SingleElList = styled.View`
    border: 2px solid black;
    margin: 0 0 15px 0;
`;

const BinButton = styled.View`
    margin-left: 92%;
`;

const HeaderText = styled.Text`
    padding: 3px;
`;

const HeaderBox = styled.View`
    border-bottom-width: 1px;
`;

const DescriptionBox = styled.ScrollView`
    height: 40px;
`;

const DescriptionText = styled.Text`
    padding: 3px;
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
        <Wrapper showsVerticalScrollIndicator={false}>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                <SingleElList key={index}>
                    <HeaderBox>
                        <HeaderText>{elem.name}</HeaderText>
                    </HeaderBox>
                    <DescriptionBox>
                        <DescriptionText>{elem.description}</DescriptionText>
                    </DescriptionBox>
                    <TouchableWithoutFeedback onPress={() => removeData(elem.id)}>
                        <BinButton>
                            <MaterialCommunityIcons name="trash-can" color="black" size={25} />
                        </BinButton>
                    </TouchableWithoutFeedback>
                </SingleElList>
            )}
            <Button title="Dodaj" onPress={goToForm} />
        </Wrapper>
    )
}

export default TodoList;