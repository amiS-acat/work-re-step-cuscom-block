import { registerBlockType } from '@wordpress/blocks';

import { edit } from '../formItemText/edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		id: {
			type: 'string',
			default: 'email'
		},
		label: {
			type: 'string',
			default: 'メールアドレス'
		},
		require: {
			type: 'boolean',
			default: true
		},
		placeholder: {
			type: 'string',
			default: ''
		},
	},
	category: metadata.category,
	edit,
	save,
});
