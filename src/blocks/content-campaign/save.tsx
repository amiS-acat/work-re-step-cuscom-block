import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const save = (props) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className={`${blockProps.className}__inner`}>
				<div className={`${blockProps.className}-left`}>
					<div className={`${blockProps.className}-heading`}>
						<RichText.Content value={attributes.heading} />
					</div>
					<div className={`${blockProps.className}-tag`}>
						<RichText.Content value={attributes.tagText} />
					</div>
					<div className={`${blockProps.className}-text`}>
						<RichText.Content value={attributes.text} />
					</div>
					<div className={`${blockProps.className}-price`}>
						<div className={`${blockProps.className}-price__text`}>
							<RichText.Content value={attributes.priceText} />
						</div>
						<div className={`${blockProps.className}-beforePrice`}>
							<del><RichText.Content value={attributes.beforePrice} /></del>
						</div>{'円/月'}→
						<div className={`${blockProps.className}-afterPrice`}>
							<RichText.Content value={attributes.afterPrice} />
						</div>円
					</div>
					<div className={`${blockProps.className}-bottom-text`}>
						<RichText.Content value={attributes.bottomText} />
					</div>
				</div>
				<div className={`${blockProps.className}-button`}>
					<RichText.Content value={attributes.buttonText} />
				</div>
			</div>
		</div>
	);
}
