import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import './styles/edit.scss';

const allowedBlocks = [ 'core/video', 'custom/points' ];
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
				templateLock={ false }
			/>
		</div>
	);
};
