import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className={ `${ blockProps.className }-text` }>
				<RichText.Content value={ attributes.text } />
			</div>
			<div className={ `${ blockProps.className }-before-price` }>
				<span
					className={ `${ blockProps.className }-before-price__text` }
				>
					<RichText.Content value={ attributes.beforePrice } />
				</span>
				円 / 月→
			</div>
			<div className={ `${ blockProps.className }-after-price` }>
				<span
					className={ `${ blockProps.className }-after-price__text` }
				>
					<RichText.Content value={ attributes.afterPrice } />
				</span>
				円
			</div>
		</div>
	);
};
