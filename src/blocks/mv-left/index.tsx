import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		bubbleText1: {
			type: 'string',
			default: 'テキスト'
		},
		bubbleText2: {
			type: 'string',
			default: 'テキスト'
		},
		buttonText: {
			type: 'string',
			default: '無料の資料請求'
		}
	},
	category: metadata.category,
	edit,
	save,
});
