import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import '../../styles/edit.scss';
import './styles/edit.scss';

const allowedBlocks = [ 'custom/problem-top', 'custom/problem-box' ];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = () => {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ allowedBlocks }
				template={ template }
			/>
		</div>
	);
};
