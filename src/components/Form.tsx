import React, { FC, useState, FormHTMLAttributes } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { setNewElemTodoList } from '../actions/todoListActions';
import { ISingleElementList } from '../entities/todoSingleEl';

const Wrapper = styled.View`
    height: 100%;
    margin: 80px 40px 0px; 40px;
`;

const CustomTextInput = styled.TextInput`
    border: 1px solid;
    margin-top: -1px;
    padding: 10px;
    color: black;
    width: 100%;
`;

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>

const Form: FC<{ switchView(formView: boolean) }> = props => {
    const disptach = useDispatch()
    const [nameInput, setNameInput] = useState<string>('');
    const [descInput, setDescrInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    const descriptionValueChange = (txt) => {
        setDescrInput(txt.nativeEvent.text);
    }

    const saveDate = () => {
        disptach<SetNewElemTodoList>(setNewElemTodoList({
            name: nameInput,
            description: descInput,
            id: new Date().getTime()
        } as ISingleElementList
        ));
        props.switchView(false)
    }

    return (
        <Wrapper>
            <CustomTextInput value={nameInput} backgroundColor="gold" onChange={nameValueChange} placeholder="Name" placeholderTextColor="#666" />
            <CustomTextInput value={descInput} backgroundColor="khaki" onChange={descriptionValueChange} placeholder="Description" placeholderTextColor="#666" />
            <Button title="Save" color="navy" onPress={saveDate} />
        </Wrapper>
    )
}

export default Form;