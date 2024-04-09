import { registerBlockType } from '@wordpress/blocks';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: metadata.title,
	attributes: {
		id: {
			type: 'string',
			default: '',
		},
		label: {
			type: 'string',
			default: '',
		},
		require: {
			type: 'boolean',
			default: true,
		},
		options: {
			type: 'string',
			default: '',
		},
	},
	category: metadata.category,
	edit,
	save,
} );
