<?php get_header(); ?>

<div class="news-post col-xs-12 col-md-8">
  <?php $my_query = "showposts=3"; $my_query = new WP_Query($my_query); ?>
  <?php if ($my_query->have_posts()) : while ($my_query->have_posts()) : $my_query->the_post(); ?>
    <!-- standard tags to display blog post information like the_title() here -->
    <?php
      if ( has_post_thumbnail()){
        the_post_thumbnail('img700x250');
      }
     ?>

<h3 class="news-post__title h3"><?php the_title(); ?></h3>
<?php the_content(''); ?>
  <?php endwhile; // end of one post ?>
  <?php endif; //end of loop ?>
</div>


<?php get_footer(); ?>