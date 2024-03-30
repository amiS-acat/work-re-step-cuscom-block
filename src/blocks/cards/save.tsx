import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export const save = () => {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className={`${blockProps.className}__inner js-slide`}>
				<button
					type="button"
					className={`${blockProps.className}-button --prev js-slide-prev`}
					aria-label='前へ'
				></button>
				<div className={`${blockProps.className}-items js-slide-container js-default-scroll-left`}>
					<InnerBlocks.Content />
				</div>
				<button
					type="button"
					className={`${blockProps.className}-button --next js-slide-next`}
					aria-label='次へ'
				></button>
			</div>
		</div>
	);
}
