<?php


define('ECW_PLUGIN_PLUGIN_PATH', get_stylesheet_directory().'/custom-widget/');
define( 'ECW_PLUGIN_DIR_URL', get_stylesheet_directory_uri().'/custom-widget/' );

// plug it in=
add_action('init', 'ecw_require_files',999);
function ecw_require_files() {
    //die("SDASDA");
    require_once ECW_PLUGIN_PLUGIN_PATH.'modules.php';
}


// enqueue your custom style/script as your requirements
// add_action( 'wp_enqueue_scripts', 'ecw_enqueue_styles', 25);
function ecw_enqueue_styles() {
    //wp_enqueue_style( 'elementor-custom-widget-editor', ECW_PLUGIN_DIR_URL . 'assets/css/editor.css');
}
