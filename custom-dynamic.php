<?php

/**
 * Plugin Name:       Custom Blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Reステップ
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-blocks
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

function custom_dynamic_custom_dynamic_blocks_init()
{
	foreach (glob(plugin_dir_path(__FILE__) . 'build/blocks/*') as $block) {
		register_block_type($block);
	}
}
add_action('init', 'custom_dynamic_custom_dynamic_blocks_init');
