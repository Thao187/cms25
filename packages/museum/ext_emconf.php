<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Museum',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'FhOoe\\Museum\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Theo Schnegg',
    'author_email' => 'theo.schnegg@gmail.com',
    'author_company' => 'FH OOE',
    'version' => '1.0.0',
];
