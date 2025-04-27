<?php 
function action_wpcf7_mail_sent1( $contact_form ) {

    $wpcf7      = WPCF7_ContactForm::get_current();
    
	$submission = WPCF7_Submission::get_instance();
    
    $form_id = $wpcf7->id;
		
    if($form_id == "684" || $form_id == "512091" )
    {

        if ($submission) 
		{
            global $wpdb;

            $data = $submission->get_posted_data(); 
			$post_id = $submission->get_meta('container_post_id');
            $address2 = "";
            if($post_id == '504142'): $address2 = "seo:wg"; 
            elseif($post_id == '2551'): $address2 = "seo:oic";
            elseif($post_id == '2554'): $address2 = "seo:pa"; 
            elseif($post_id == '504138'): $address2 = "seo:tr"; 
            elseif($post_id == '504822'): $address2 = "seo:blr"; 
            elseif($post_id == '504832'): $address2 = "seo:ia"; 
            elseif($post_id == '504828'): $address2 = "seo:tra"; 
            elseif($post_id == '504140'): $address2 = "seo:fs"; endif;

            $list_id = '6516';
            if($address2 != " "): $list_id = '6504'; endif;
            

			/*echo '<pre>'; print_r($data); echo '</pre>';*/

            $phone = $data['phone'];
               
                $url= "https://alleviate.ytel.com/x5/api/non_agent.php?function=add_lead&user=101&pass=ADAMpub3947&source=site";
             
                $response = wp_remote_post( $url, array(
                    'method'      => 'POST',
                    'timeout'     => 60,
                    'redirection' => 5,
                    'httpversion' => '1.0',
                    'blocking'    => true,
                    'headers'     => array(),
                    'body'        => array(
                        'phone_number' => $data['phone'],
                        'list_id' => $list_id,
                        'dnc_check' => 'Y',
                        'campaign_dnc_check' => '',
                        'campaign_id' => '',
                        'add_to_hopper' => 'yes',
                        'hopper_priority' => '99',
                        'first_name' => $data['your-name'],
                        'last_name' => $data['lastname'],
                        'email' => $data['your-email'],
                        'address2' => $address2
                    ),
                    'cookies'     => array()
                    )
                );
               /*echo "<pre>";
                 echo '<pre>'; print_r($submission); echo '</pre>';*/
    
               /*echo "testing";
               print_r($response); die;*/
        }
    }
}; 

add_action( 'wpcf7_before_send_mail', 'action_wpcf7_mail_sent1', 10, 1 );

/*
function mycustom_wpcf7_skip_mail( $skip_mail, $contact_form ) {
    $skip_mail = true;
    return $skip_mail; 
}

function filter_wpcf7_display_message( $message, $status) { 
    $status = "validation_failed";
    $message = "You enter phone number alreday exits";
    return $message; 
}; 

function filter_wpcf7_validation_error( $error, $name, $instance ) { 
    // make filter magic happen here... 
    $error = "Your Enter Phone Number Already Exists";
    return $error; 
}; */
         
// add the filter 
/*add_filter( 'wpcf7_validation_error', 'filter_wpcf7_validation_error', 10, 3 ); 

function my_validate_email($result, $tag) {
    
    $errorMessage = 'You Enter Phone Number alreday exits'; // Change to your error message

            $result->invalidate($tag, $errorMessage);
        
    return $result;
}
*/