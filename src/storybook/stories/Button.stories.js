import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';

storiesOf('Button', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)

  .add('Primary', () => (
    <Button
      value={text('Button Text', 'Button')}
      onPress={action('Button clicked')}
    ></Button>
  ))

  .add('Secondary', () => (
    <Button
      value={text('Button Text', 'Button')}
      onPress={action('Button clicked')}
      variant='secondary'
    ></Button>
  ))

  .add('Danger', () => (
    <Button
      value={text('Button Text', 'Button')}
      onPress={action('Button clicked')}
      variant='danger'
    ></Button>
  ))

  .add('Large', () => (
    <Button
      value={text('Button Text', 'Button')}
      onPress={action('Button clicked')}
      size='large'
    ></Button>
  ));
