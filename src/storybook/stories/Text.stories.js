import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';

storiesOf('Text', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)

  .add('Heading', () => (
    <Text variant='heading'>{text('Text', 'This is some text')}</Text>
  ))

  .add('Subheading', () => (
    <Text variant='sub-heading'>{text('Text', 'This is some text')}</Text>
  ))

  .add('Normal', () => <Text>{text('Text', 'This is some text')}</Text>);
