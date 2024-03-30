import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		text: {
			type: 'string',
			default: 'テキスト'
		},
		beforePrice: {
			type: 'string',
			default: '0'
		},
		afterPrice: {
			type: 'string',
			default: '0'
		},
	},
	category: metadata.category,
	edit,
	save,
});
