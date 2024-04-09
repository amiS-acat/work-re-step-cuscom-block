import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

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
		bottomText: {
			type: 'string',
			default: 'テキスト',
		},
		buttonText: {
			type: 'string',
			default: 'テキスト',
		},
	},
	category: metadata.category,
	edit,
	save,
} );
