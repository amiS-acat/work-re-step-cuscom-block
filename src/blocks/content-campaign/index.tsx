import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: metadata.title,
	attributes: {
		heading: {
			type: 'string',
			default: '見だし',
		},
		tagText: {
			type: 'string',
			default: 'テキスト',
		},
		text: {
			type: 'string',
			default: 'テキスト',
		},
		priceText: {
			type: 'string',
			default: 'テキスト',
		},
		beforePrice: {
			type: 'string',
			default: '0',
		},
		afterPrice: {
			type: 'string',
			default: '0',
		},
		bottomText: {
			type: 'string',
			default: 'テキスト',
		},
		buttonText: {
			type: 'string',
			default: '資料請求',
		},
	},
	category: metadata.category,
	edit,
	save,
} );
