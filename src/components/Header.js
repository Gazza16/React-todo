import React from 'react';
import { Progress, Level, Heading, Title} from 'reactbulma';

const Header = ({totalIncomplete, title}) => (
<div>
  <Progress warning value="75" max="100">75%</Progress>
  <Level>
    <Level.Item hasTextCentered>
      <div>
        <Heading>{ title }</Heading>
        <Title>{ totalIncomplete }</Title>
      </div>
    </Level.Item>
  </Level>
</div>



 )

export default Header;
