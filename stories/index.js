/* eslint import/first: 0 */
import React from 'react'

import { storiesOf } from '@storybook/react' // eslint-disable-line

/* Components */
import InputField from '../src/components/InputField'
import SelectField from '../src/components/SelectField'
import Button from '../src/components/Button'

storiesOf('Button', module)
  .add('Primary small button', () => <Button title="Avbryt" type="primary" small />)
  .add('Secondary large button', () => <Button title="Logga  in" type="secondary" large />)
  .add('Tertiary large rounded button', () => (
    <Button title="Skapa profil" type="tertiary" rounded large />
  ))
  .add('Disabled medium button', () => <Button title="Registrera" type="disabled" />)

storiesOf('InputField', module)
  .add('with asteriks and placeholder', () => (
    <InputField
      isRequired
      label="My field"
      labelStyle={{
        fontSize: 16,
        fontStyle: 'Helvetica',
      }}
      style={{
        height: 40,
        width: 100,
      }}
      inputStyle={{
        padding: 10,
      }}
      placeholder="Hello world!"
    />
  ))
  .add('with nothing', () => <InputField isRequired={false} label="requires label" />)
  .add('with onChange & constant value', () => (
    <InputField
      isRequired={false}
      label="baluba"
      value="baluba"
      onChange={_ => console.log(_)} // eslint-disable-line
    />
  ))

storiesOf('SelectField', module).add('Standard', () => (
  <SelectField options={[{ name: 'D-Sek', value: 'dsek' }, { name: 'F-Sek', value: 'fsek' }]} />
))

/* Containers */
