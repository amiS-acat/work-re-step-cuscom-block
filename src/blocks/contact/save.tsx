import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export const save = (props) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className={`${blockProps.className}__inner`}>
				<div className='flex justify-center items-center flex-col gap-2'>
					<div className={`${blockProps.className}-date`}>
						<RichText.Content value={attributes.date} />
					</div>
					<div className={`${blockProps.className}-time`}>
						<RichText.Content value={attributes.time} />
					</div>
				</div>
				<div>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
