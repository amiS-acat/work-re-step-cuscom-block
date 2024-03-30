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
				<div className={`${blockProps.className}-bubble`}>
					<span className={`${blockProps.className}-bubble__text`}><RichText.Content value={attributes.bubbleText} /></span>
				</div>
				<div className={`${blockProps.className}-text`}>
					<InnerBlocks.Content />
				</div>
				<div className={`${blockProps.className}-price`}>
					<div className='flex flex-col items-center'>
						<div className={`${blockProps.className}-tag`}>
							<RichText.Content value={attributes.tag} />
						</div>
						<div className={`${blockProps.className}-before-price`}>
							<span className={`${blockProps.className}-before-price__text`}><del><RichText.Content value={attributes.beforePrice} /></del></span>{'円/月'}→
						</div>
					</div>
					<div className={`${blockProps.className}-after-price`}>
						<span className={`${blockProps.className}-after-price__text`}><RichText.Content value={attributes.afterPrice} /></span>円
					</div>
				</div>
				<div className={`${blockProps.className}-message`}>
					<div>
						<RichText.Content value={attributes.message} />
					</div>
				</div>
			</div>
		</div>
	);
}
