import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<h2 className={`${blockProps.className}__inner`}>
				<span className={`${blockProps.className}__text`}>
					<InnerBlocks.Content />
				</span>
			</h2>
		</div>
	);
}
