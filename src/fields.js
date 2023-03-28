const formFields = [
  {
    id: 'id',
    name: 'ID',
    type: 'string',
    required: true,
    helpText: 'UUID',
  },
  {
    id: 'manifestVersion',
    name: 'Manifest version',
    type: 'string',
    valuespace: 'number',
    required: true,
  },
  {
    id: 'displayName',
    name: 'Display Name',
    type: 'string',
    required: true,
    helpText: 'Name of integration, as it will appear on Control Hub',
  },
  {
    id: 'vendor',
    name: 'Vendor',
    type: 'string',
    required: true,
    helpText: 'Company that created the integration'
  },
  {
    id: 'email',
    name: 'E-mail',
    type: 'string',
    valuespace: 'email',
    required: true,
  },
  {
    id: 'description',
    name: 'Description',
    type: 'text',
    required: true,
    helpText: 'A description of what the integration does and what value it will provide to the customer'
  },
  {
    id: 'availability',
    name: 'Availability',
    type: 'select',
    values: ['global', 'org_private'],
    required: true,
  },
  {
    id: 'descriptionUrl',
    name: 'Description URL',
    type: 'string',
    helpText: 'URL to more details about the integration '
  },
  {
    id: 'tocUrl',
    name: 'Terms URL',
    type: 'string',
    helpText: 'URL to terms and conditions',
    required: false, // this.config.availability === 'global',
  }
];