import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import './styles/edit.scss';

const allowedBlocks = [
	'custom/card',
]
const template = allowedBlocks.map((block) => [block, {}]) as TemplateArray;

export const edit = () => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={allowedBlocks}
				template={template}
				templateLock={false}
			/>
		</div>
	);
};
