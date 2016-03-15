<?php

//creating post types
function create_post_type($name, $args = array()) {
add_action( 'init', function() use($name,$args) {
  $upper = ucwords($name);
  $name = strtolower(str_replace(' ','_', $name));
  $args = array_merge(
    array(
      'label'           => "All $upper",
      'labels' => array('add_new_item'  => "Add New $upper"),
      'public'          => true,
      'has_archive'     => true,
      'supports'        => array('title','editor','thumbnail')
      ),
    $args
    );
  register_post_type($name, $args);
  });
}
create_post_type('aktualnosci');
