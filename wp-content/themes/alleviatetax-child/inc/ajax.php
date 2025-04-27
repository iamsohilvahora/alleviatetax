<?php 
add_action("wp_ajax_services_list_mobile", "services_list_mobile");
add_action("wp_ajax_nopriv_services_list_mobile", "services_list_mobile");

function services_list_mobile(){
	$offset = $_REQUEST['offset']; 
	$service_args = array( 'post_type' => 'our_services', 'posts_per_page' => 1, 'offset' => $offset, 'order' => 'ASC' );
	$service_query = new WP_Query( $service_args ); 
	if ( $service_query->have_posts() ) : 
		while ( $service_query->have_posts() ) : $service_query->the_post(); ?>                    
          <div class="service-single">
              <div class="service-icon"><img src="<?php the_field('service_icon'); ?>" alt="<?php the_title(); ?>"/></div>
              <div class="service-excerpt">
                 <h3 class="service-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <div class="desp"><?php echo the_field('service_excerpt'); ?></div>                      
              </div>                      
          </div>                
        <?php endwhile;
        wp_reset_postdata(); 
    endif; die; 

}