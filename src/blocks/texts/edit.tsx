import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

const allowedBlocks = [ 'custom/text' ];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = () => {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				template={ template }
				allowedBlocks={ allowedBlocks }
				templateLock={ false }
			/>
		</div>
	);
};
