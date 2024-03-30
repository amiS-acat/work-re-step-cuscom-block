import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		step1: {
			type: 'string',
			default: 'テキスト'
		},
		step2: {
			type: 'string',
			default: 'テキスト'
		},
		step3: {
			type: 'string',
			default: 'テキスト'
		}
	},
	category: metadata.category,
	edit,
	save,
});
