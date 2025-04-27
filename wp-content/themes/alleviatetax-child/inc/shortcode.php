<?php

// Related Post Shortcdoe Base on Catgory
function alleviatetax_related_posts(){
    global $post;
    $related = new WP_Query(  array( 'category__in' => wp_get_post_categories( $post->ID ), 'posts_per_page' => 3, 'post__not_in'   => array( $post->ID )));
    if( $related->have_posts() ): ?>
        <ul class="alleviatetax-related-posts sidebar-post-list">
        <?php while ( $related->have_posts() ) : $related->the_post();?>
            <li>
                <div class="realted-post-img post-img">
                    <a href="<?php echo get_the_permalink($related->ID); ?>" title="<?php echo get_the_title($related->ID); ?>">
                        <?php echo get_the_post_thumbnail( $related->ID, 'related-post' ); ?>
                    </a>
                </div>
                <div class="post-detail">
                    <h3><a href="<?php echo get_the_permalink($related->ID); ?>" title="<?php echo get_the_title($related->ID); ?>"><?php echo get_the_title($related->ID); ?></a></h3>
                    <p><?php $content = get_the_content(); echo wp_trim_words($content, 5); ?></p>
                </div>
            </li>
        <?php endwhile; wp_reset_postdata(); ?>
        </ul> 
    <?php else: ?>
        <ul class="alleviatetax-related-posts">
            <li> No Post Found!!</li>            
        </ul>
    <?php endif;
}
add_shortcode('alleviatetax_related_posts', 'alleviatetax_related_posts');


// Recent Post Shortcdoe Base on Catgory
function alleviatetax_recent_post(){
    global $post;
    $related = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 3, 'category__in'   => wp_get_post_categories( $post->ID ), 'post__not_in'   => array( $post->ID ) ) );
    if( $related->have_posts() ): ?>
        <ul class="alleviatetax-recent-posts sidebar-post-list">
        <?php while ( $related->have_posts() ) : $related->the_post();?>
     
            <li>
                <div class="realted-post-img post-img">
                    <a href="<?php echo get_the_permalink($related->ID); ?>" title="<?php echo get_the_title($related->ID); ?>">
                        <?php echo get_the_post_thumbnail( $related->ID, 'related-post' ); ?>
                    </a>
                </div>
                <div class="post-detail">
                    <h3><a href="<?php echo get_the_permalink($related->ID); ?>" title="<?php echo get_the_title($related->ID); ?>"><?php echo get_the_title($related->ID); ?></a></h3>
                    <p><?php $content = get_the_content(); echo wp_trim_words($content, 5); ?></p>
                </div>
            </li>
          
        <?php endwhile; wp_reset_postdata(); ?>
        </ul> 
    <?php else: ?>
        <ul class="alleviatetax-recent-posts">
            <li> No Post Found!!</li>            
        </ul>
    <?php endif;
}
add_shortcode('alleviatetax_recent_post', 'alleviatetax_recent_post');

function testimonial_posts_callback()
{
     global $post;
    $testimonial = new WP_Query( array( 'post_type' => 'testimonial', 'posts_per_page' => -1));?> 
  <div class="client-say-slider"> 
<div class="swiper-container"> 
   <div class="swiper-wrapper"> 
    <?php if( $testimonial->have_posts() ): ?>
     <?php $totalcount = 0; $count = 0; while ( $testimonial->have_posts() ) : $testimonial->the_post();  ?>
     <?php $count++; $totalcount++;
        $completeCount = false;
        if($count == 1){
            echo '<div class="slider-col swiper-slide">';}
        if($count == 2){
            $count = 0;
            $completeCount = true;            
        }
        ?>
         <div class="client-slide">
                <p class="client-nm-st"><?php echo get_the_title(); ?>. <span class="client-state"> <?php echo '('.get_field('state_name').')';?> </span></p>
                <p class="client-review">
                    <i class="fa fa-quote-left"></i><?php echo get_the_content(); ?><i class="fa fa-quote-right"></i>
                </p>
            </div>
        <?php
        if($completeCount || ($testimonial->found_posts == $totalcount)){
            echo '</div>';
        }
        endwhile; wp_reset_postdata(); ?>
</div> 
<?php else: ?>
     <div class="swiper-wrapper">
        <div>No posts Found!!</div>
     </div>
<?php endif;?>
 </div>
   <div class="swiper-button-next swiper-btn"></div>
    <div class="swiper-button-prev swiper-btn"></div>
    <div class="swiper-pagination"></div>
</div>  
 
<?php }

add_shortcode('testimonial_posts','testimonial_posts_callback');

function news_posts_callback(){

  global $post;
    $related = new WP_Query( array( 'post_type' => 'news', 'posts_per_page' => -1 ) );
    if( $related->have_posts() ): ?>
        <ul class="alleviatetax-recent-posts sidebar-post-list">
        <?php while ( $related->have_posts() ) : $related->the_post();?>
     
            <li>
                <div class="realted-post-img post-img">
                    <a href="<?php echo get_the_permalink($related->ID); ?>" title="<?php echo get_the_title($related->ID); ?>">
                        <?php echo get_the_post_thumbnail( $related->ID, 'related-post' ); ?>
                    </a>
                </div>
                <div class="post-detail">
                    <h3><a href="<?php echo get_the_permalink($related->ID); ?>" title="<?php echo get_the_title($related->ID); ?>"><?php echo get_the_title($related->ID); ?></a></h3>
                    <p><?php $content = get_the_content(); echo wp_trim_words($content, 5); ?></p>
                </div>
            </li>
          
        <?php endwhile; wp_reset_postdata(); ?>
        </ul> 
    <?php else: ?>
        <ul class="alleviatetax-news-posts">
            <li> No Post Found!!</li>            
        </ul>
    <?php endif;
  
}
add_shortcode('news_posts','news_posts_callback');
