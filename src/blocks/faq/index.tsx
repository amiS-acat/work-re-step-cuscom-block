import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: metadata.title,
	attributes: {
		question: {
			type: 'string',
			default: '質問',
		},
		answer: {
			type: 'string',
			default: '回答',
		},
	},
	category: metadata.category,
	edit,
	save,
} );
