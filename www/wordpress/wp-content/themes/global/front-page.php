<?php get_header(); ?>
<div class="col-xs-12 col-md-8">
  <?php $my_query = "showposts=3"; $my_query = new WP_Query($my_query); ?>
  <?php if ($my_query->have_posts()) : while ($my_query->have_posts()) : $my_query->the_post(); ?>

    <!-- standard tags to display blog post information like the_title() here -->
  <h3><?php the_title(); ?></h3>
  <p><?php the_content(); ?></p>

  <?php endwhile; // end of one post ?>
  <?php endif; //end of loop ?>

  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <!-- standard tags to display the static page information like the_title() here -->

  <?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>