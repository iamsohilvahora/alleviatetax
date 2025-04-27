<?php

// Add the podium Javascript
add_action('wp_footer', 'add_podium');


// The guts of the podium script
function add_podium()
{
  // Ignore admin, feed, robots or trackbacks
  if ( is_feed() || is_robots() || is_trackback() )
  {
    return;
  }

  $options = get_option('podium_settings');

  // If options is empty then exit
  if( empty( $options ) )
  {
    return;
  }

  // Check to see if podium is enabled
  if ( esc_attr( $options['podium_enabled'] ) == "on" )
  {
    $podium_tag = $options['podium_widget_code'];

    // Insert tracker code
    if ( '' != $podium_tag )
    {
      echo "<!-- Start Podium Webchat Code -->\n";
      // echo "<script defer src=\"https://connect.podium.com/widget.js#API_TOKEN=$podium_tag\" id=\"podium-widget\" data-api-token=\"$podium_tag\"></script>\n";
      echo $podium_tag;
      echo"<!-- end: Podium Webchat Code. -->\n";


    }
  }
}
?>
