import React from 'react';
import styled, { css } from 'styled-components';
import { Select, Option } from './components';

const Box = styled.div`
    padding: 40px;
`;

const SelectBox = styled.div`
    width: 300px;
`;

function App() {
  return (
    <Box>
        <SelectBox>
            <Select label='Лейбл' value='1'>
                <Option value='1'>option 1</Option>
                <Option value='2'>option 2</Option>
                <Option value='3'>option 3</Option>
                <Option value='4'>option 4</Option>
            </Select>
        </SelectBox>
    </Box>
  );
}

export default App;
