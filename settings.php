<?php

/**
 * Settings for the bootstrap theme
 */

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {

    //This is the note box for all the settings pages
    $name = 'theme_learningspace/notes';
    $heading = get_string('notes', 'theme_learningspace');
    $information = get_string('notesdesc', 'theme_learningspace');
    $setting = new admin_setting_heading($name, $heading, $information);
    $settings->add($setting);

    $name = 'theme_learningspace/enablejquery';
    $title = get_string('enablejquery','theme_learningspace');
    $description = get_string('enablejquerydesc', 'theme_learningspace');
    $default = '1';
    $setting = new admin_setting_configcheckbox($name, $title, $description, $default);
    $settings->add($setting);

    $name = 'theme_learningspace/logo_url';
    $title = get_string('logo_url','theme_learningspace');
    $description = get_string('logo_urldesc', 'theme_learningspace');
    $setting = new admin_setting_configtext($name, $title, $description, '', PARAM_URL);
    $settings->add($setting);

    $name = 'theme_learningspace/customcss';
    $title = get_string('customcss','theme_learningspace');
    $description = get_string('customcssdesc', 'theme_learningspace');
    $default = '';
    $setting = new admin_setting_configtextarea($name, $title, $description, $default);
    $settings->add($setting);
}
