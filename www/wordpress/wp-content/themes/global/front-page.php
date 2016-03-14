<?php get_header(); ?>
<?php
  $count = 0;
  $my_query = "showposts=3"; $my_query = new WP_Query($my_query);
  if ($my_query->have_posts()) :  while ($my_query->have_posts()) : $my_query->the_post();
  $count++;
?>
    <!-- article post -->
    <article class="news-post<?php if($count == 1): ?> first<?php endif; ?>">
      <?php if ( has_post_thumbnail() && $count == 1 ) ://display image size 700x250px for first Post ?>
          <figure class="news-post__image"> <?php the_post_thumbnail('img700x250'); ?></figure>

      <?php else : //if is not first post, display 250x250px image size?>
          <figure class="news-post__image"> <?php the_post_thumbnail('img250x250'); ?></figure>
      <?php endif; ?>

      <h3 class="news-post__title h3"><?php the_title(); ?></h3>
      <span class="news-post__published-date"><?php the_date(); ?></span>
      <div class="news-post__content"><?php the_excerpt(); ?></div>
    </article>


  <?php endwhile; // end of one post ?>
  <?php endif; //end of loop ?>

  </div>


<?php get_footer(); ?>