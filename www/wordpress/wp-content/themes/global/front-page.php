<?php get_header(); ?>
<h2 class="h2">Aktualności</h2>
<?php
  $count = 0;
  $args = array( 'post_type' => 'Aktualnosci', 'posts_per_page' => 3 );
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post();
  $count++;
?>
    <!-- article post -->
    <article class="news-post clearfix<?php if($count == 1): ?> first<?php endif; ?>">
      <div class="news-post__content">
        <?php if ( has_post_thumbnail() && $count == 1 ) ://display image size 700x250px for first Post ?>
            <figure class="news-post__image"> <?php the_post_thumbnail('img750x250'); ?>
            </figure>

        <?php else : //if is not first post, display 250x250px image size?>
            <figure class="news-post__image"> <?php the_post_thumbnail('img250x250'); ?>
            </figure>
        <?php endif; ?>


          <div class="news-post__text-container <?php if(!has_post_thumbnail()) : ?>news-post__text-container--full-width<?php endif; ?>">


          <h3 class="news-post__title h3"><a href="<?php the_permalink() ?>" title="Read more <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
          <span class="news-post__published-date"><?php the_date(); ?></span>
          <p class="news-post__body"><?php echo get_the_excerpt(); ?></p>
        </div>
      </div>
    </article>


  <?php endwhile; // end of one post ?>

<?php

?>


  </div>

<?php get_sidebar('league_table'); ?>
<?php get_footer(); ?>