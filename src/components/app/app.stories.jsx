import React from 'react';
import App from './app';

export default {
  components: App,
  title: 'App',
};

const Template = args => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hello World!!!',
};
