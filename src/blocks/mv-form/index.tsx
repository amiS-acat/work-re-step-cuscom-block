import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		formType: {
			type: 'string',
			default: 'form01'
		},
		heading: {
			type: 'string',
			default: '資料請求/お問合せ'
		},
		checkboxText: {
			type: 'string',
			default: 'プライバシーポリシーに同意する'
		},
		submitText: {
			type: 'string',
			default: '内容を送信'
		}
	},
	category: metadata.category,
	edit,
	save,
});
