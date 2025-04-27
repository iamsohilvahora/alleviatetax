<?php
/* Template name : statetemplate */

require 'vendor/autoload.php';

use MaxMind\Db\Reader;


/* $url = dirname(__FILE__);
print_r($url);*/

function getUserState()
{
    $ipAddress = $_SERVER['REMOTE_ADDR'];
    $databaseFile = dirname(__FILE__ ) . '/maxmind/GeoLite2-City.mmdb';
    try {
        $reader = new Reader($databaseFile);
        /*$ipAddress = '174.128.240.189';*///Colorado
        $info = $reader->get($ipAddress);
        if(!empty($info) && !empty($info['subdivisions']) &&
            !empty($info['subdivisions'][0]) &&
            !empty($info['subdivisions'][0]['iso_code']) &&
            gettype($info['subdivisions'][0]['iso_code']) === 'string'
        ){
            return $info['subdivisions'][0]['iso_code'];
        }
    } catch (\Exception $e) {
        log_error_to_file('maxmind-db-errors', $e->getMessage());
    }
    if (isset($reader)) {
        $reader->close();
    }
}



add_shortcode( 'get_States_tag', 'wpdocs_get_States' );
function wpdocs_get_States()
{
	
	$states = [
		'' => 'Select State',
		'AL' => 'Alabama',
		'AK' => 'Alaska',
		'AZ' => 'Arizona',
		'AR' => 'Arkansas',
		'CA' => 'California',
		'CO' => 'Colorado',
		'CT' => 'Connecticut',
		'DE' => 'Delaware',
		'DC' => 'District Of Columbia',
		'FL' => 'Florida',
		'GA' => 'Georgia',
		'HI' => 'Hawaii',
		'ID' => 'Idaho',
		'IL' => 'Illinois',
		'IN' => 'Indiana',
		'IA' => 'Iowa',
		'KS' => 'Kansas',
		'KY' => 'Kentucky',
		'LA' => 'Louisiana',
		'ME' => 'Maine',
		'MD' => 'Maryland',
		'MA' => 'Massachusetts',
		'MI' => 'Michigan',
		'MN' => 'Minnesota',
		'MS' => 'Mississippi',
		'MO' => 'Missouri',
		'MT' => 'Montana',
		'NE' => 'Nebraska',
		'NV' => 'Nevada',
		'NH' => 'new Hampshire',
		'NJ' => 'new Jersey',
		'NM' => 'new Mexico',
		'NY' => 'new York',
		'NC' => 'North Carolina',
		'ND' => 'North Dakota',
		'OH' => 'Ohio',
		'OK' => 'Oklahoma',
		' or ' => 'Oregon',
		'PA' => 'Pennsylvania',
		'RI' => 'Rhode Island',
		'SC' => 'South Carolina',
		'SD' => 'South Dakota',
		'TN' => 'Tennessee',
		'TX' => 'Texas',
		'UT' => 'Utah',
		'VT' => 'Vermont',
		'VA' => 'Virginia',
		'WA' => 'Washington',
		'WV' => 'West Virginia',
		'WI' => 'Wisconsin',
		'WY' => 'Wyoming',
	];
					
	$foodstag_Data  = '<select name="states" class="form-control">';

	foreach ($states AS $stateValue => $stateName)
	{ 
		if(getUserState() == $stateValue)
		{
			$selected = 'selected';
		}
		else
		{
			$selected = '';
		}
		
		$foodstag_Data .= '<option value="'.$stateValue.'" '.$selected.'>'.$stateName.'</option>';
	}
 
	$foodstag_Data .= '</select>';
	
	return $foodstag_Data;
}