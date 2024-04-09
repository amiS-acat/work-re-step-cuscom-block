import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './style.scss';

export const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};
