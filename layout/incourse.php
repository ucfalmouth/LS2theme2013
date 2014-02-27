<?php include 'header.php'; ?>
<?php include 'custom-settings.php'; ?>

<!--<div id="page" class="container-fluid">-->



<!-- course.php -->
<?php 
    //$topicmenu = $PAGE->get_renderer('block_course_menu_plus'); 
    //$topicmenuwidget = new block_course_menu_plus();
    //echo $topicmenu->render();
?>



<div class=" container"><!-- this is for emulating position fixed of the nav -->
                   
                        <!-- Top Navigation -->
                    
                       
                       
                               
                            
                  
<?php

global $DB;

$category = $DB->get_record('course_categories',array('id'=>$COURSE->category));

$path = explode('/',$category->path);

$root_category_id = $path[1];

$root_category = $DB->get_record('course_categories',array('id'=>$root_category_id));

echo "<p id=\"parent-cat\" style=\"display:none\">".$root_category->name."</p>";

?>       











        





<div id="page" class="container-fluid">


<div id="page-content" class="row-fluid">
 


<?php if ($layout === 'pre-and-post') { ?>
    <div id="region-bs-main-and-pre" class="span9">
    <div class="row-fluid">
    <section id="region-main" class="span9">
<?php } else if ($layout === 'side-post-only') { ?>
    <section id="region-main" class="span9 ">
<?php } else if ($layout === 'side-pre-only') { ?>
    <section id="region-main" class="span9">
<?php } else if ($layout === 'content-only') { ?>
    <section id="region-main" class="span12">
<?php } ?>

    <a class="btn back-to-mod btn-large" href="#"><i class="icon-arrow-left"></i> Return to module</a><br />
      
        <hr />
    <?php echo $OUTPUT->main_content() ?>
    <?php echo $coursecontentfooter; ?>

    </section>


<?php if ($layout !== 'content-only') {
          if ($layout === 'pre-and-post') { ?>
            <aside id="region-pre" class="span3 block-region region-content">




    <?php } else if ($layout === 'side-pre-only') { ?>
            <aside id="region-pre" class="span3 block-region region-content">



    <?php } ?>
          <?php
                if (!right_to_left()) {
                    echo $OUTPUT->blocks_for_region('side-pre');
                } else if ($hassidepost) {
                    echo $OUTPUT->blocks_for_region('side-post');
                }
            ?>

               


            </aside>
    <?php if ($layout === 'pre-and-post') {
          ?></div></div><?php // Close row-fluid and span9.
   }

    if ($layout === 'side-post-only' OR $layout === 'pre-and-post') { ?>
        <aside id="region-post" class="span4 block-region region-content">
        <?php if (!right_to_left()) {
                  echo $OUTPUT->blocks_for_region('side-post');
              } else {
                  echo $OUTPUT->blocks_for_region('side-pre');
              } ?>



        </aside>
    <?php } ?>
<?php } ?>
</div>

   </div>
                           
                            
                        </div>


<?php include 'footer.php'; ?>



