import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		date: {
			type: 'string',
			default: '00/00(月)'
		},
		time: {
			type: 'string',
			default: '00:00~00:00'
		},
	},
	category: metadata.category,
	edit,
	save,
});
