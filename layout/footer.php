<footer id="page-footer">
 
    <?php echo $OUTPUT->standard_footer_html(); ?>
</footer>
<?php echo $OUTPUT->standard_end_of_body_html() ?>


</div>

<!--<?php if (!empty($PAGE->theme->settings->enablejquery)) {?>-->





<script src="<?php echo $CFG->wwwroot;?>/theme/learningspace/javascript/jquery.sidr.min.js"></script>
<script src="<?php echo $CFG->wwwroot;?>/theme/learningspace/javascript/backstretch.js"></script>
<script src="<?php echo $CFG->wwwroot;?>/theme/learningspace/javascript/placeholder.js"></script>
<script src="<?php echo $CFG->wwwroot;?>/theme/bootstrap/javascript/bootstrap.min.js"></script>
<script src="<?php echo $CFG->wwwroot;?>/theme/learningspace/javascript/inboxtable.js"></script>
<script src="<?php echo $CFG->wwwroot;?>/theme/learningspace/javascript/datatables.min.js"></script>
<script src="<?php echo $CFG->wwwroot;?>/theme/learningspace/javascript/datatables.plugins.js"></script>


<script >
$(document).ready(function() {
    $(".aaronclick").click(function() {
        $("#section-0 .section-modchooser-link a, #section-0 .section-modchooser-link span").click();
    });

});
</script>

<script>$(document).ready(function(){$('.work-here').popover();});</script>

<!-- Outdated browser warning message -->
<script type="text/javascript"> 
var $buoop = {} 
$buoop.ol = window.onload; 
window.onload=function(){ 
 try {if ($buoop.ol) $buoop.ol();}catch (e) {} 
 var e = document.createElement("script"); 
 e.setAttribute("type", "text/javascript"); 
 e.setAttribute("src", "http://browser-update.org/update.js"); 
 document.body.appendChild(e); 
} 
</script> 

<?php }?>

<?php include 'ls-analytics.php'; ?>

</body>
</html>