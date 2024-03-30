import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const save = (props) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className={`${blockProps.className}__inner`}>
				<div>
					<h1 className={`${blockProps.className}-heading`}>
						<InnerBlocks.Content />
					</h1>
				</div>
				<div className={`${blockProps.className}-button`}>
					<RichText.Content value={attributes.buttonText} />
				</div>
			</div>
			<div className={`${blockProps.className}-bubble`}>
				<div className={`${blockProps.className}-bubble__1`}>
					<div className='w-full'><RichText.Content value={attributes.bubbleText1} /></div>
				</div>
				<div className={`${blockProps.className}-bubble__2`}>
					<div className='w-full'><RichText.Content value={attributes.bubbleText2} /></div>
				</div>
			</div>
		</div>
	);
}
