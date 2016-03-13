<?php get_header(); ?>

<?php $my_query = "showposts=3"; $my_query = new WP_Query($my_query); ?>
<?php if ($my_query->have_posts()) : while ($my_query->have_posts()) : $my_query->the_post(); ?>

  <!-- standard tags to display blog post information like the_title() weeweehere -->

<?php endwhile; // end of one post ?>
<?php endif; //end of loop ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

  <!-- standard tags to display the static page information like the_title() here -->

<?php endwhile; endif; ?>

<?php get_footer(); ?>