import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<form method="post" action="./">
				<input
					type="text"
					name="formType"
					value={ attributes.formType }
					hidden
				/>
				<div className={ `${ blockProps.className }-heading` }>
					<RichText.Content value={ attributes.heading } />
				</div>
				<div className={ `${ blockProps.className }-items` }>
					<InnerBlocks.Content />
					<label
						className={ `${ blockProps.className }-item-checkbox` }
					>
						<input type="checkbox" required />
						<span>
							<RichText.Content
								value={ attributes.checkboxText }
							/>
						</span>
					</label>
				</div>
				<div className="flex justify-center">
					<button className={ `${ blockProps.className }-submit` }>
						{ attributes.submitText }
					</button>
				</div>
			</form>
		</div>
	);
};
