import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<h2 { ...blockProps }>
			<span className={ `${ blockProps.className }__text` }>
				<InnerBlocks.Content />
			</span>
		</h2>
	);
};
