import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className={ `${ blockProps.className }__inner` }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};
