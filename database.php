<?php

require "vendor/autoload.php";
//If you want the errors to be shown
error_reporting(E_ALL); 
ini_set('display_errors', '1');
use Illuminate\Database;
use Illuminate\Database\Capsule\Manager as Capsule;
 
 $capsule = new Capsule;
 
 $capsule->addConnection([
    "driver" => "mysql",
    "host" =>"127.0.0.1",
    "database" => "eduplus",
    "username" => "root",
    "password" => ""
    
   //   "driver" => "mysql",
   //  "host" =>"127.0.0.1",
   //  "database" => "edupluss_lDB",
   //  "username" => "edupluss_lDB",
   //  "password" => "=&ZT%%427Q7F"
 ]);
//Make this Capsule instance available globally.
 $capsule->setAsGlobal();
// Setup the Eloquent ORM.
 $capsule->bootEloquent();

?> 