import React, { FC, useState, FormHTMLAttributes } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { setNewElemTodoList } from '../actions/todoListActions';
import { ISingleElementList } from '../entities/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const CustomTextInput = styled.TextInput`
    border: 1px solid;
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
        } as ISingleElementList
        ));
        props.switchView(false)
    }

    return (
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Name" />
            <CustomTextInput value={descInput} onChange={descriptionValueChange} placeholder="Description" />
            <Button title="Zapisz" onPress={saveDate} />
        </Wrapper>
    )
}

export default Form;