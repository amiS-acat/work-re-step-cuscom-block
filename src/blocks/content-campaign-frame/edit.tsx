import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import '../../styles/edit.scss';
import './styles/edit.scss';

const allowedBlocks = [
	'custom/heading',
	'custom/campaign-frame-top',
	'custom/texts',
	'custom/campaign-frame-bottom',
];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = () => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className="block-editor-custom-box">
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					template={ template }
					templateLock={ false }
				/>
			</div>
		</div>
	);
};
