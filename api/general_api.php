<?php
header('Access-Control-Allow-Origin: ' .$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header("Content-Type:application/json, Access-Control-Allow-Origin:*");
header("Content-Type:multipart/form-data, Access-Control-Allow-Origin:*");


include_once "../database.php";
include_once "../controller/generalQueryController.php";

$controllerQuery = new generalQueryController();


    // QUERY REQUEST STARTS ===================
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    // API QUERY CONNECTIONS ===============
   
    if($action == 'dashBoardCount'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->dashBoardCount($query));
    }

    if($action == 'login'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->login($query));
    }

    // =================================certification
    if($action == 'newCertification'){
        // $query = json_decode(file_get_contents("php://input"),true);
       $controllerQuery->newCertification();
    
    }

    if($action == 'edit'){
       $controllerQuery->updateCertifiction();
    }
    if($action=='getData'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->getData($query));
    }

    
    if($action == 'delete_Data'){
        $query = json_decode(file_get_contents("php://input"),true);
        $controllerQuery->delete_Data($query);
    }

    // get all certification category
    if($action == 'c_category'){
        return json_encode($controllerQuery->c_category());
    }

    // add new certification category
    if($action == 'c_add_category'){
        $query = json_decode(file_get_contents('php://input'),true);
       return json_encode($controllerQuery->c_add_category($query));
    }

    // update certification category
    if ($action == 'c_update_category'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->c_update_category($query));
    }

    // delete certification category
    if ($action == 'c_delete_category'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->c_delete_category($query));
    }


    // search code
    if($action =='search_filter'){
        $query = json_decode(file_get_contents('php://input'),true);
        return json_encode($controllerQuery->search_filter($query));
    }

    // total certification post for endless scroll
    if($action == 'totalCertificationPost'){
        return json_encode($controllerQuery ->totalCertificationPost());
    }
?>