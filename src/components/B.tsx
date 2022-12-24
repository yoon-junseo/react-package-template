import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: pink;
  color: white;
  width: 200px;
  height: 200px;
`;

function B() {
  return <Wrapper>B</Wrapper>;
}

export default B;
