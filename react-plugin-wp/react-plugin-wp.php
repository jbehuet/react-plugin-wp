<?php
/**
 * Plugin Name: React Plugin WP
 * Plugin URI: 
 * Description: 
 * Version: 1.0.0
 * Author: Jerome BEHUET
 * Author URI: https://jbehuet.fr
 *
*/

add_action('rest_api_init', function () {
  
});

add_action('wp_enqueue_scripts', function () {
    //172.21.0.1 gateway docker
  if (in_array($_SERVER['REMOTE_ADDR'], array('172.21.0.1', '::1'))) {
    // DEV React dynamic loading
    $js_to_load = 'http://localhost:3000/static/js/bundle.js';
  } else {
    $js_to_load = plugin_dir_url( __FILE__ ) . 'react-plugin-wp.js';
    $css_to_load = plugin_dir_url( __FILE__ ) . 'react-plugin-wp.css';
  }
  wp_enqueue_style('react_plugin_wp_styles', $css_to_load);
  wp_enqueue_script('react_plugin_wp_app', $js_to_load, '', mt_rand(10,1000), true);
});


// cleanup data on uninstall
function react_plugin_wp_uninstall () {
  
}

register_uninstall_hook(__FILE__, 'react_plugin_wp_uninstall');