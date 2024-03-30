import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const save = (props) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className={`${blockProps.className}__inner`}>
				<h2 className={`${blockProps.className}-heading`}>
					<RichText.Content value={attributes.heading} />
				</h2>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
