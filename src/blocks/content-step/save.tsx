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
				<div className={ `${ blockProps.className }-body` }>
					<div className={ `${ blockProps.className }-items` }>
						<div className={ `${ blockProps.className }-item` }>
							<div
								className={ `${ blockProps.className }-item__heading` }
							>
								STEP1
							</div>
							<div
								className={ `${ blockProps.className }-item__text` }
							>
								<RichText.Content value={ attributes.step1 } />
							</div>
						</div>
						<div className={ `${ blockProps.className }-item` }>
							<div
								className={ `${ blockProps.className }-item__heading` }
							>
								STEP2
							</div>
							<div
								className={ `${ blockProps.className }-item__text` }
							>
								<RichText.Content value={ attributes.step2 } />
							</div>
						</div>
						<div className={ `${ blockProps.className }-item` }>
							<div
								className={ `${ blockProps.className }-item__heading` }
							>
								STEP3
							</div>
							<div
								className={ `${ blockProps.className }-item__text` }
							>
								<RichText.Content value={ attributes.step3 } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
