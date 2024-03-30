import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		buttonText: {
			type: 'string',
			default: '無料トライアル申請'
		}
	},
	category: metadata.category,
	edit,
	save,
});
