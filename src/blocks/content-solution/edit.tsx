import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import '../../styles/edit.scss';
import './styles/edit.scss';

const allowedBlocks = [
	'custom/bubble-heading',
	'custom/solution-body'
]
const template = allowedBlocks.map((block) => [block, {}]) as TemplateArray;

export const edit = () => {
	return (
		<div {...useBlockProps()}>
			<div>
				<InnerBlocks
					allowedBlocks={allowedBlocks}
					template={template}
				/>
			</div>
		</div>
	);
};
