import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className={ `${ blockProps.className }__inner` }>
				<div className={ `${ blockProps.className }-heading` }>
					<h2
						className={ `${ blockProps.className }-heading-bubble` }
					>
						<span
							className={ `${ blockProps.className }-heading-bubble__text` }
						>
							<RichText.Content value={ attributes.heading } />
						</span>
					</h2>
				</div>
				<div
					className={ `${ blockProps.className }-container js-slide` }
				>
					<button
						type="button"
						className={ `${ blockProps.className }-button --prev js-slide-prev` }
						aria-label="前へ"
					></button>
					<div
						className={ `${ blockProps.className }-items js-slide-container` }
					>
						<InnerBlocks.Content />
					</div>
					<button
						type="button"
						className={ `${ blockProps.className }-button --next js-slide-next` }
						aria-label="次へ"
					></button>
				</div>
			</div>
		</div>
	);
};
