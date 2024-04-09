import { registerBlockType } from '@wordpress/blocks';

import { edit } from '../formItemText/edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: metadata.title,
	attributes: {
		id: {
			type: 'string',
			default: 'tel',
		},
		label: {
			type: 'string',
			default: '電話番号',
		},
		require: {
			type: 'boolean',
			default: true,
		},
		placeholder: {
			type: 'string',
			default: '',
		},
	},
	category: metadata.category,
	edit,
	save,
} );
