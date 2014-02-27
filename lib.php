<?php

defined('MOODLE_INTERNAL') || die();

function learningspace_user_settings($css, $theme) {
    global $CFG;
    if (!empty($theme->settings->customcss)) {
        $customcss = $theme->settings->customcss;
    } else {
        $customcss = null;
    }

    $css .= $customcss;

    return $css;
}

