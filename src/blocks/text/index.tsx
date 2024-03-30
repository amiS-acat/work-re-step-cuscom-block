import { registerBlockType } from '@wordpress/blocks';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: metadata.title,
	attributes: {
		text: {
			type: 'string',
			default: 'テキスト',
		},
	},
	category: metadata.category,
	edit,
	save,
} );
