<?php

// VARIABLES

$theme = wp_get_theme();
$ver = $theme->get('Version');

// ACTIONS
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );
add_action( 'after_setup_theme', 'image_sizes' );

// JAVACSRIPT, CSS
function add_theme_scripts(){
	global $ver;
	wp_enqueue_script('app', get_template_directory_uri()."/build/combine.js", array( 'jquery' ), $ver);
  wp_enqueue_style('app-style', get_template_directory_uri()."/build/combine.min.css", array(), $ver);
}

// RESPONSIVE IMAGES
function image_sizes(){
	add_image_size( '_3200', 3200, 0, 0 );
	add_image_size( '_2560', 2560, 0, 0 );
	add_image_size( '_1920', 1920, 0, 0 );
	add_image_size( '_1280', 1280, 0, 0 );
	add_image_size( '_1024', 1024, 0, 0 );
	add_image_size( '_768', 768, 0, 0 );
	add_image_size( '_512', 512, 0, 0 );
	add_image_size( '_256', 256, 0, 0 );
}

?>
