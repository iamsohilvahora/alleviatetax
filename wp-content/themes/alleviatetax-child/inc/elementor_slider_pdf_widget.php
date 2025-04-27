<?php
class ElementorSliderPdfWidget extends \Elementor\Widget_Base{
	public function get_name(){
		return 'irs_pdf';
	}
	public function get_title(){
		return 'IRS Pdf';
	}
	public function get_icon(){
		return 'fa fa-link';
	}
	public function get_categories(){
		return ['general'];
	}
	protected function _register_controls(){
		// Register content tab
		$this->start_controls_section(
			'content_section',
			[
				'label' => 'IRS Pdf',
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// load repeater
		$repeater = new \Elementor\Repeater();

		// Disabled PDF details as per client feedback on 14/9/2022
		// name field
		// $repeater->add_control(
		// 	'name',
		// 	[
		// 		'type' => \Elementor\Controls_Manager::TEXT,
		// 		'label' => 'Result',
		// 	]
		// );


		// // owned field
		// $repeater->add_control(
		// 	'owned',
		// 	[
		// 		'type' => \Elementor\Controls_Manager::TEXT,
		// 		'label' => 'Owed',
		// 	]
		// );

		// // paid field
		// $repeater->add_control(
		// 	'paid',
		// 	[
		// 		'type' => \Elementor\Controls_Manager::TEXT,
		// 		'label' => 'Paid',
		// 	]
		// );

		// // saved field
		// $repeater->add_control(
		// 	'saved',
		// 	[
		// 		'type' => \Elementor\Controls_Manager::TEXT,
		// 		'label' => 'Saved',
		// 	]
		// );

		// Display image upload
		$repeater->add_control(
			'image',
			[
				'type' => \Elementor\Controls_Manager::MEDIA,
				'label' => 'Choose Image',
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				]
			]
		);

		// Display pdf upload
		// $repeater->add_control(
		// 	'file_link',
		// 	[
		// 		'label' => esc_html__( 'Select File', 'file-select-control-for-elementor' ),
		// 		'type'	=> 'file-select',
		// 		'placeholder' => esc_html__( 'URL to File', 'file-select-control-for-elementor' ),
		// 		'description' => esc_html__( 'Select file from media library or upload', 'file-select-control-for-elementor' ),
		// 	]
		// );

		// get repeater list
		$this->add_control(
			'repeater_list',
			[
				'label' => 'Repeater List',
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				// 'image_field' => '{{{ image }}}',
				// 'pdf_field' => '{{{ pdf_file_link }}}',
			]
		);

		$this->end_controls_section();	
	}
	protected function render(){
		$settings = $this->get_settings_for_display();
		
    	// get repeater list
    	if($settings['repeater_list']){
			echo '<div class="swiper slider-list-wrapper">';
			echo '<div class="swiper-wrapper">';
			foreach($settings['repeater_list'] as $item){
				echo '<div class="swiper-slide slider-list">';
				$pdf_file_link = $item['file_link'];
		    	if(!empty($pdf_file_link)){
			    	// For image
			    	if(!empty($item['image']['url'])){
			    		$this->add_render_attribute( 'image', 'src',  $item['image']['url'] );
			    		$this->add_render_attribute( 'image', 'alt', \Elementor\Control_Media::get_image_alt( $item['image'] ) );
			    		$this->add_render_attribute( 'image', 'title', \Elementor\Control_Media::get_image_title( $item['image'] ) );
			    		$this->add_render_attribute( 'image', 'class', 'irs-pdf-class' );
			    		$this->add_render_attribute( 'image', 'width', $item['image']['width'] );
			    		$this->add_render_attribute( 'image', 'height', $item['image']['height'] );

			    		// Get image URL
						$preview_image = '<img src="' . $item['image']['url'] . '" width="767" height="978">';
			    	}
			    	else{
			    		$preview_image = "http://alleviatetax.demo1.bytestechnolab.com/wp-content/uploads/2022/08/pdf-1.png";
			    		$preview_image = "<img src='$preview_image' width='767' height='978'>";
			    	}
			    
			    	// Display result
			    	echo "<a href='$pdf_file_link' target='_blank'>$preview_image</a>";

					// Disabled PDF details as per client feedback on 14/9/2022
			    	if(!empty($item['name'])){
			    		// echo "<p><span class='pdf-dtl'>Result:</span><span>".$item['name']."</span></p>";
			    	}
			    	// if(!empty($item['location'])){
			    	// 	echo "<p><span class='pdf-dtl'>Location:</span><span>".$item['location']."</span></p>";
			    	// }
			    	if(!empty($item['owned'])){
			    		// echo "<p><span class='pdf-dtl'>Owed:</span><span>".$item['owned']."</span></p>";
			    	}
			    	if(!empty($item['paid'])){
			    		// echo "<p><span class='pdf-dtl'>Paid:</span><span>".$item['paid']."</span></p>";
			    	}
			    	if(!empty($item['saved'])){
			    		// echo "<p><span class='pdf-dtl'>Saved:</span><span>".$item['saved']."</span></p>";
			    	}
		    	}
				echo '</div>';
			}
			echo '</div>';
			echo '</div>';
			echo '<div class="swiper-button-next swiper-button"></div>';
			echo '<div class="swiper-button-prev swiper-button"></div>';
			

		}
	}
}

?>