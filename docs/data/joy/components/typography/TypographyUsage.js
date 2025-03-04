import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import JoyUsageDemo from 'docs/src/modules/components/JoyUsageDemo';

export default function TypographyUsage() {
  return (
    <JoyUsageDemo
      componentName="Typography"
      data={[
        {
          propName: 'level',
          knob: 'select',
          defaultValue: 'h1',
          options: [
            'h1',
            'h2',
            'h3',
            'h4',
            'title-lg',
            'title-md',
            'title-sm',
            'body-lg',
            'body-md',
            'body-sm',
            'body-xs',
          ],
        },

        {
          propName: 'color',
          knob: 'color',
        },

        {
          propName: 'variant',
          knob: 'radio',
          options: ['plain', 'outlined', 'soft', 'solid'],
        },

        {
          propName: 'children',
          knob: 'input',
          defaultValue: 'Typography',
        },

        {
          propName: 'noWrap',
          knob: 'switch',
          defaultValue: false,
        },
      ]}
      renderDemo={(props) => (
        <Box sx={{ maxWidth: '400px' }}>
          <Typography {...props}>{props.children}</Typography>
        </Box>
      )}
    />
  );
}
