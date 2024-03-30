import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

import './style.scss';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className={ `${ blockProps.className }__inner` }>
				<h3 className={ `${ blockProps.className }-heading` }>
					<InnerBlocks.Content />
				</h3>
				<div className={ `${ blockProps.className }-text` }>
					<RichText.Content value={ attributes.text } />
				</div>
			</div>
		</div>
	);
};
