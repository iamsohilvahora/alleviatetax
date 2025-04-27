<?php
   add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
   
   function enqueue_parent_styles() {
      wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
      wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/style.css' );
      wp_enqueue_style( 'swipre-style', get_stylesheet_directory_uri().'/css/swiper-bundle.min.css' );
      wp_enqueue_script("jquery");
      wp_enqueue_script( 'main-js', get_stylesheet_directory_uri().'/js/main.js',array(), '1.0.0',true );
      $args = array('url'   => admin_url( 'admin-ajax.php' ),);
      wp_localize_script( 'main-js', 'ajax', $args );
   }
   
   
   add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );
   
   function custom_image_size() {
   add_theme_support( 'post-thumbnails' );
   add_image_size( 'service-image', 416, 416 , true  );
   add_image_size( 'team-image', 222, 222 , true  );
   add_image_size('related-post', 60, 60, true );
   }
   add_action( 'after_setup_theme', 'custom_image_size' );
   
   /** State List **/
   require(get_stylesheet_directory() . '/getstates/statetemplate.php');
   require(get_stylesheet_directory() . '/inc/ajax.php');
   require(get_stylesheet_directory() . '/inc/shortcode.php');
   require(get_stylesheet_directory() . '/inc/custom-post-type.php');

   add_filter( 'wpcf7_form_elements', 'do_shortcode' ); 
   
   
   // Services CPT 
   function our_services() {
       register_post_type( 'our_services',
           array(
               'labels' => array(
                   'name' => __( 'Services' ),
                   'singular_name' => __( 'Service' )
               ),
               'public' => true,
               'has_archive' => true,
               'show_in_rest' => true,
               'menu_icon' => 'dashicons-admin-generic',
               'taxonomies' => array( 'category' ),
               'supports' => array( 'title', 'editor','thumbnail' )
    
           )
       );
   }
   add_action( 'init', 'our_services' );
   
   function team_taxonomy() {
   
       register_taxonomy(
           'team-category',
           'team',
           array(
               'label' => __( 'Category' ),
               'rewrite' => array( 'slug' => 'team-category' ),
               'hierarchical' => true,
           )
       );
   }
   add_action( 'init', 'team_taxonomy' );
   
   // Our Team CPT 
   function our_team() {
       register_post_type( 'team',
           array(
               'labels' => array(
                   'name' => __( 'Team' ),
                   'singular_name' => __( 'Member' )
               ),
               'public' => true,
               'has_archive' => true,
               'show_in_rest' => true,
               'menu_icon' => 'dashicons-groups',
               'supports' => array( 'title', 'editor','thumbnail' )
    
           )
       );
   }
   add_action( 'init', 'our_team' );
   
   
   // Service Tabs
   function services_tabs(){
      
   $args = array( 'post_type' => 'our_services', 'posts_per_page' => -1, 'order' => 'ASC' );
   $the_query = new WP_Query( $args ); 
   ?>
<div class="service-tab-section mobile-slider">
   <div class="tab-header">
      <div class="tab-swiper-container swiper-container">
         <ul class="tab-list tab-swiper-wrapper swiper-wrapper">
            <?php if ( $the_query->have_posts() ) : $count = 1;?>
            <?php while ( $the_query->have_posts() ) : $the_query->the_post();  ?>
            <li class="swiper-slide <?php if($count == 1) { echo "active";} ?>">
               <span  data-tag="<?php echo $count; ?>" class="tab">
                  <div class="service-icon"><img src="<?php the_field('service_icon'); ?>" alt="<?php the_title(); ?>"/></div>
                  <h3 class="service-title"><?php the_title(); ?></h3>
               </span>
            </li>
            <?php $count++ ; endwhile;
               wp_reset_postdata(); ?> 
            <?php endif; unset($count); ?>   
         </ul>
      </div>
      <div class="swiper-navigation">
         <!-- next / prev arrows -->
         <div class="swiper-button-next"></div>
         <div class="swiper-button-prev"></div>
      </div>
      <!-- !next / prev arrows -->
   </div>
   <div class="tab-container">
      <div class="tab-container-inner">
         <?php if ( $the_query->have_posts() ) : $count = 1; ?>
         <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>                    
         <div class="tab-content <?php if($count == 1) { echo "active";} ?>" id="<?php echo $count; ?>">
            <div class="service-thumb"><?php the_post_thumbnail('service-image'); ?></div>
            <div class="service-excerpt">
               <h3 class="service-title"><?php the_title(); ?></h3>
               <div class="desp"><?php echo the_field('service_excerpt'); ?></div>
               <div class="read-more-btn">
                  <a href="#">
                  <span class="button-text">Read More</span>    
                  <span class="button-icon"><i aria-hidden="true" class="fas fa-arrow-circle-right"></i></span>    
                  </a>
               </div>
            </div>
         </div>
         <?php $count++ ; endwhile;
            wp_reset_postdata(); ?> 
         <?php endif;  unset($count); ?> 
      </div>
   </div>
</div>
<?php }
   add_shortcode('services_tabs', 'services_tabs');
   
   
   
   // Our Team
   function team_list(){  
   $category = get_terms('team-category');
   foreach ($category as $catVal) {
   wp_reset_query();
   $team_args = array( 'post_type' => 'team', 'posts_per_page' => -1, 'order' => 'ASC' , 'tax_query' => array(
                               array(
                                   'taxonomy' => 'team-category',
                                   'field' => 'slug',
                                   'terms' => $catVal->slug,
                               )
                           ),
                       );
   $the_team = new WP_Query($team_args);
   ?>
<div class="team-section">
   <div class="team-heading">
      <h3 class="heading"><?php echo $catVal->name; ?></h3>
   </div>
   <div class="team-section-wrappper mobile-slider">
      <div class="team-listing <?php echo $catVal->slug; ?> swiper-container" data-id="<?php echo $catVal->slug; ?>">
         <div class="team-listing-wrapper swiper-wrapper">
            <?php if ( $the_team->have_posts() ) : ?>
            <?php while ( $the_team->have_posts() ) : $the_team->the_post(); ?>   
            <div class="swiper-slide">
               <div class="team-single">
                  <?php if(has_post_thumbnail()){ ?>
                  <span class="team-img"><?php the_post_thumbnail('team-image'); ?></span>
                  <?php } ?>
                  <div class="team-desp">
                     <div class="deatil">
                        <h3 class="title"><?php the_title(); ?></h3>
                        <span class="designation"><?php echo the_field('designation') ?></span>                                    
                     </div>
                     <?php /* <div class="team-btn-wrapper">
                        <a href="<?php the_permalink(); ?>">
                        <span class="button-text">Read More</span>    
                        <span class="button-icon"><i aria-hidden="true" class="fas fa-arrow-circle-right"></i></span>    
                        </a>
                     </div> */ ?>
                  </div>
               </div>
            </div>
            <?php endwhile; wp_reset_postdata(); ?> 
            <?php endif;  ?> 
         </div>
      </div>
      <div class="swiper-navigation">
         <!-- next / prev arrows -->
         <div class="swiper-button-next"></div>
         <div class="swiper-button-prev"></div>
         <!-- !next / prev arrows -->
      </div>
   </div>
</div>
<?php } ?>
<?php }
   add_shortcode('team_list','team_list');
   
   
   
   // Our Services
  function services_list(){
    
$service_args = array( 'post_type' => 'our_services', 'posts_per_page' => -1, 'order' => 'ASC' );
if(wp_is_mobile()){
  $limit = 3;
  $service_args = array( 'post_type' => 'our_services', 'posts_per_page' => $limit, 'order' => 'ASC' );
}
$service_query = new WP_Query( $service_args ); 
 $total_post   = $service_query->found_posts;
?>
<div class="service-list">
   <div class="service-list-container">
      <div class="service-list-container-inner">
             <?php if ( $service_query->have_posts() ) : $count = 1; ?>
                <?php while ( $service_query->have_posts() ) : $service_query->the_post(); ?>                    
                  <div class="service-single">
                      <div class="service-icon"><img src="<?php the_field('service_icon'); ?>" alt="<?php the_title(); ?>"/></div>
                      <div class="service-excerpt">
                         <h3 class="service-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <div class="desp"><?php echo the_field('service_excerpt'); ?></div>                      
                      </div>                      
                  </div>                
                <?php $count++ ; endwhile;
                wp_reset_postdata(); ?> 
            <?php endif;  unset($count); ?> 
        </div>  
   </div>
</div>

<div class="load-more-wrap">
    <a href="javascript:void(0)" class="load-more-service">Click More<i class="fas fa-arrow-circle-down"></i></a>
</div>
<div class="load-more-wrap" style="display:none;" id="nomore">
    <a href="javascript:void(0)" class="load-more-service">No More<i class="fas fa-arrow-circle-down"></i></a>
</div>
<div class="get-started-wrap">
    <a href="<?php echo site_url(); ?>/get-started/">Get Started <span>with</span> <img src="<?php echo get_stylesheet_directory_uri() . '/images/logo.png' ?>"></a>
</div>
<?php }
   add_shortcode('services_list', 'services_list');
   
   
   // Success rate
   function success_rate_team(){  
   $success_args = array( 'post_type' => 'team', 'posts_per_page' => -1, 'order' => 'ASC' );
   $success_team = new WP_Query( $success_args );
   
   ?>
<div class="team-section mobile-slider">
   <div class="team-listing team-swiper-container swiper-container">
      <div class="team-listing-wrapper swiper-wrapper">
         <?php if ( $success_team->have_posts() ) : ?>
         <?php while ( $success_team->have_posts() ) : $success_team->the_post(); 
            $yes = get_field('add_member_on_success_rate_page');
            if( $yes && in_array('Yes', $yes) ) : ?>  
         <div class="swiper-slide">
            <div class="team-single">
               <?php if(has_post_thumbnail()){ ?>
               <span class="team-img"><?php the_post_thumbnail('team-image'); ?></span>
               <?php } ?>
               <div class="team-desp">
                  <div class="deatil">
                     <h3 class="title"><?php the_title(); ?></h3>
                     <span class="designation"><?php echo the_field('designation') ?></span>                                    
                  </div>
                 <?php /* <div class="team-btn-wrapper">
                     <a href="<?php the_permalink(); ?>">
                     <span class="button-text">Read More</span>    
                     <span class="button-icon"><i aria-hidden="true" class="fas fa-arrow-circle-right"></i></span>    
                     </a>
                  </div> */ ?>
               </div>
            </div>
         </div>
         <?php endif; endwhile; wp_reset_postdata(); ?> 
         <?php endif;  ?> 
      </div>
   </div>
   <div class="swiper-navigation">
      <!-- next / prev arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <!-- !next / prev arrows -->
   </div>
</div>
<?php  }
add_shortcode('success_rate_team','success_rate_team');
add_action( 'phpmailer_init', 'configure_smtp',999 );
function configure_smtp( $phpmailer ){
$phpmailer->IsSMTP(); 
$phpmailer->CharSet = 'UTF-8';
$phpmailer->Mailer = 'smtp';
$phpmailer->SMTPAuth = true; // authentication enabled
$phpmailer->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
$phpmailer->Host = 'ssl://smtp.gmail.com';
$phpmailer->Port = 465; // or 587
// $phpmailer->IsHTML(true);
$phpmailer->From = 'inquiry@bytestechnolab.com';
$phpmailer->FromName='Bytes Technolab'; 
$phpmailer->Username = 'inquiry@bytestechnolab.com';
$phpmailer->Password = 'inq$Bt2@!9';
//$mail->AddAddress($to);
}


function cf7_footer_script(){ 
//if page name is contact.
if ( get_post_type() == "our_services" and is_single('bank-levy-release')) {?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
       location = "<?php echo get_site_url().'/thank-you-bank-levy-release'; ?>";
        }, false ); </script><?php }
 else if ( get_post_type() == "our_services" and is_single('installment-agreements')){?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = "<?php echo get_site_url().'/thank-you-installment-agreements'; ?>";
        }, false );</script><?php } 
else if ( get_post_type() == "our_services" and is_single('penalty-abatement-help')){?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
           location = "<?php echo get_site_url().'/thank-you-penalty-abatement-help'; ?>";
        }, false );</script><?php }
else if ( get_post_type() == "our_services" and is_single('fresh-start-program-assistance')){?>
 <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = "<?php echo get_site_url().'/thank-you-fresh-start-program-assistance'; ?>";
        }, false ); </script><?php }
else if ( get_post_type() == "our_services" and is_single('offer-in-compromise-eligibility')){?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
           location = "<?php echo get_site_url().'/thank-you-offer-in-compromise-eligibility'; ?>";
        }, false ); </script><?php }
    else if ( get_post_type() == "our_services" and is_single('tax-relief-services')){?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = "<?php echo get_site_url().'/thank-you-tax-relief-services/'; ?>";
        }, false ); </script><?php }
    else if ( get_post_type() == "our_services" and is_single('tax-resolution-assistance')){?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
          location = "<?php echo get_site_url().'/thank-you-tax-resolution-assistance'; ?>";
        }, false ); </script><?php }
    else if ( get_post_type() == "our_services" and is_single('remove-wage-garnishment-assistance')){?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = "<?php echo get_site_url().'/thank-you-remove-wage-garnishment-assistance'; ?>";
        }, false ); </script><?php }
    else if ( get_post_type() == "our_services" and is_single('tax-attorney-california')
             || get_post_type() == "our_services" and is_single('innocent-spouse-relief')
             || get_post_type() == "our_services" and is_single('delinquent-irs-tax-return-filings')
             || get_post_type() == "our_services" and is_single('non-collectibles-statute-of-limitations')){ ?>
  <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = "<?php echo get_site_url().'/thank-you'; ?>";
        }, false ); </script><?php }
    elseif (is_page('get-started')) { ?>
      <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            if(event.detail.contactFormId == 512091){
                  location = "<?php echo get_site_url().'/thankyou'; ?>";
            }
            if(event.detail.contactFormId == 684){
               location = "<?php echo get_site_url().'/thank-you'; ?>";
            }
        }, false ); </script> <?php }
    elseif(is_page('get-started-spanish')){ ?>
   <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = "<?php echo get_site_url().'/gracias'; ?>";
        }, false ); </script><?php }
    else{ ?>
            <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
            location = "<?php echo get_site_url().'/thank-you'; ?>";
        }, false ); </script><?php
         }
     }
add_action('wp_footer', 'cf7_footer_script');




/**
 * Custom elementor widget.
 */
function wp_load_elementor_widget_func(){
    if(did_action('elementor/loaded')){
        require(get_stylesheet_directory() . '/inc/elementor_slider_pdf_widget.php'); // get slider pdf widget
        \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new ElementorSliderPdfWidget());
    }
}
add_action('init', 'wp_load_elementor_widget_func');

function register_new_controls($controls_manager){
    require(get_stylesheet_directory() . '/inc/fileselect-control.php'); // get pdf control
    $controls_manager->register_control('file-select', new \FileSelect_Control()); // add pdf control
}
add_action('elementor/controls/controls_registered', 'register_new_controls');

function show_hide_contact_form_7(){
    date_default_timezone_set('America/Los_Angeles'); // Set the default timezone to PST
    $today = new DateTime();
    $dayOfWeek = $today->format('w'); // Sunday: 0, Monday: 1, Tuesday: 2, ..., Saturday: 6
    $currentTime = $today->format('H:i');

    if ($dayOfWeek >= 1 && $dayOfWeek <= 5) { // Show connect-now-form on Monday to Friday
        if ($currentTime >= '08:00' && $currentTime <= '17:00') { // Show connect-now-form between 8 AM and 5 PM ?>
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    var connectNowForms = document.getElementsByClassName('connect-now-form');
                    var contactForms = document.getElementsByClassName('contact-form');
                    for (var i = 0; i < connectNowForms.length; i++) {
                        connectNowForms[i].style.display = 'block';
                    }
                    for (var i = 0; i < contactForms.length; i++) {
                        contactForms[i].style.display = 'none';
                    }
                });
        </script>
        <?php } else { ?>
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    var connectNowForms = document.getElementsByClassName('connect-now-form');
                    var contactForms = document.getElementsByClassName('contact-form');
                    for (var i = 0; i < connectNowForms.length; i++) {
                        connectNowForms[i].style.display = 'none';
                    }
                    for (var i = 0; i < contactForms.length; i++) {
                        contactForms[i].style.display = 'block';
                    }
                });
        </script>
        <?php }
    } else { ?>
        <script>
            document.addEventListener('DOMContentLoaded', function() { 
                var connectNowForms = document.getElementsByClassName('connect-now-form');
                var contactForms = document.getElementsByClassName('contact-form');
                for (var i = 0; i < connectNowForms.length; i++) {
                    connectNowForms[i].style.display = 'none';
                }
                for (var i = 0; i < contactForms.length; i++) {
                    contactForms[i].style.display = 'block';
                }
            });
    </script>
    <?php }
}
add_action('wp_head', 'show_hide_contact_form_7');

require get_stylesheet_directory() . '/custom-widget/elementor-custom-widget.php';
require get_stylesheet_directory() . '/custom-widget/modules.php';
