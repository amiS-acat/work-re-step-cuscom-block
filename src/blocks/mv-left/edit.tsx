import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import './styles/edit.scss';

const allowedBlocks = [
	'custom/text',
]
const template = allowedBlocks.map((block) => [block, {}]) as TemplateArray;

export const edit = (props) => {
	const { attributes, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<h1 className='block-editor-custom-heading'>
				<InnerBlocks
					template={template}
					allowedBlocks={allowedBlocks}
					templateLock={false}
				/>
			</h1>
			<div className='block-editor-custom-button'>
				<RichText
					value={attributes.buttonText}
					onChange={(buttonText) => setAttributes({ buttonText })}
				/>
			</div>
			<div className='flex gap-4'>
				<div className='block-editor-custom-bubble'>
					<RichText
						value={attributes.bubbleText1}
						onChange={(bubbleText1) => setAttributes({ bubbleText1 })}
					/>
				</div>
				<div className='block-editor-custom-bubble'>
					<RichText
						value={attributes.bubbleText2}
						onChange={(bubbleText2) => setAttributes({ bubbleText2 })}
					/>
				</div>
			</div>
		</div>
	);
};
