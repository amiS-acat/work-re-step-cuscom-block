import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import '../../styles/edit.scss';
import './styles/edit.scss';

const allowedBlocks = [
	'custom/heading',
	'custom/faq',
	'custom/text',
]
const template = allowedBlocks.map((block) => [block, {}]) as TemplateArray;

export const edit = () => {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={allowedBlocks}
				template={template}
				templateLock={false}
			/>
		</div>
	);
};
