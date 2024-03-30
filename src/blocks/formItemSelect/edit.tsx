import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, TextareaControl, CheckboxControl } from '@wordpress/components'
import { useState } from '@wordpress/element';

export const edit = (props) => {
	const { attributes, setAttributes } = props;
	const [isChecked, setChecked] = useState(true);

	return (
		<div {...useBlockProps()}>
			<TextControl
				label={__('ID', 'id')}
				value={attributes.id}
				onChange={(val) => setAttributes({ id: val })}
			/>
			<TextControl
				label={__('ラベル', 'label')}
				value={attributes.label}
				onChange={(val) => setAttributes({ label: val })}
			/>
			<TextareaControl
				label={__('オプション', 'options')}
				value={attributes.options}
				onChange={(val) => setAttributes({ options: val })}
			/>
			<CheckboxControl
				label="必須"
				checked={isChecked}
				onChange={(val => {
					setChecked(val);
					setAttributes({ require: val })
				})}
			/>
		</div>
	);
};
