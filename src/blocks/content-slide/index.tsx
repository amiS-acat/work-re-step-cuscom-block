import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import { edit } from './edit';
import { save } from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	title: metadata.title,
	attributes: {
		heading: {
			type: 'string',
			default: '見だし'
		},
	},
	category: metadata.category,
	edit,
	save,
});
