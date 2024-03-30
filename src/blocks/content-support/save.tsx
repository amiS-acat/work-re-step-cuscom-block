import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className={ `${ blockProps.className }__inner` }>
				<h2 className={ `${ blockProps.className }-heading` }>
					<InnerBlocks.Content />
				</h2>
				<div className={ `${ blockProps.className }-box` }>
					<div className={ `${ blockProps.className }-box__inner` }>
						<RichText.Content value={ attributes.text } />
					</div>
				</div>
				<div className={ `${ blockProps.className }-bottom` }>
					<RichText.Content value={ attributes.bottomText } />
				</div>
				<div className={ `${ blockProps.className }-button` }>
					<RichText.Content value={ attributes.buttonText } />
				</div>
			</div>
		</div>
	);
};
